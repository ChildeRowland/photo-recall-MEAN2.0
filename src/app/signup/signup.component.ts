import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../classes/user/user';
import { AuthService } from '../auth/auth.service';
import { MessengerService } from '../services/messenger/messenger.service';

@Component({
	moduleId: module.id,
	selector: 'app-signup',
	templateUrl: 'signup.component.html',
	styleUrls: ['signup.component.css'],
	directives: [ REACTIVE_FORM_DIRECTIVES ],
	providers: [ MessengerService ]
})

export class SignupComponent implements OnInit {
	signupForm: FormGroup;
	submitting = false;

	constructor(public messengerService:MessengerService, private _fb:FormBuilder, private _authService:AuthService) {}

	ngOnInit() {
		this.signupForm = this._fb.group({
			name: ['', Validators.compose([ this.messengerService.generalValidators ])],
			email: ['', Validators.compose([ this.messengerService.isEmail, this.messengerService.generalValidators ])],
			password: ['', Validators.compose([ this.messengerService.hasMinComplexity, this.messengerService.generalValidators ])],
			confirmPassword: ['',  Validators.compose([ this.messengerService.generalValidators ])]
		}, { validator: this.mustBeMatching });
	}

	onSignup() {
		if (this.signupForm.valid) {
			this.submitValidUser();
		} else {
			alert("Form not valid");
		}
	}

	private submitValidUser() {
		this.submitting = true;

		const user:User = new User(
				this.signupForm.value.email,
				this.signupForm.value.password,
				this.signupForm.value.name
			);
		// remove for deploy
		console.log(user);
		this._authService.signup(user)
			.subscribe(
				// remove for production
				data => {
					// loggin undefined
					console.log(data);
					// sign the user in
					
					this._authService.signin(user)
						.subscribe(data => {
							// remove for deploy
							console.log(data);
							localStorage.setItem('token', data.token);
							localStorage.setItem('salt', data.salt);
							// remove for deploy
							localStorage.setItem('userId', data.userId);
						}, err => console.log(err),
						() => this.submitting = false);

				}, err => {
					console.log(err);
					this.serverMessage(err.code);
					this.submitting = false;
				});
	}

	// SERVER MESSAGES
	private serverMessage(code:number) {
		if (code == 500) {
			this.signupForm.find('name').setErrors({ error: { message: "There was a problem on the server when trying to save." }});
		}
		if (code == 200) {
			// render success message
		}
	}


	// CUSTOM VALIDATORS
	private mustBeMatching(form:any) {
		let password = form.value.password;
		let confirmPassword = form.value.confirmPassword;

		if (password == '' || confirmPassword == '') {
			return null;
		}

		if (password != confirmPassword) {
			form.find('confirmPassword').setErrors({ error: { message: "Password fields don\'t match" }});
		}
		return null;
	}

}


