import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

import { User } from '../classes/user/user';
import { AuthService } from '../auth/auth.service';

@Component({
	moduleId: module.id,
	selector: 'app-signup',
	templateUrl: 'signup.component.html',
	styleUrls: ['signup.component.css'],
	providers: [ AuthService ]
})

export class SignupComponent implements OnInit {
	signupForm: ControlGroup;
	submitting = false;

	constructor(private _fb:FormBuilder, private _authService: AuthService) {}

	ngOnInit() {
		this.signupForm = this._fb.group({
			name: ['', Validators.compose([ Validators.required ])],
			email: ['', Validators.compose([ Validators.required, this.isEmail ])],
			password: ['', Validators.compose([ Validators.required, this.hasMinComplexity ])],
			confirmPassword: ['',  Validators.compose([ Validators.required ])]
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
					console.log(data)
					// sign the user in
					
					this._authService.signin(user)
						.subscribe(data => {
							// remove for deploy
							console.log(data);
							localStorage.setItem('token', data.token);
							localStorage.setItem('salt', data.salt);
							localStorage.setItem('userId', data.userId);
						}, err => console.log(err),
						() => this.submitting = false);

				}, err => {
					console.log(err);
					this.submitting = false;
				});
	}


	// CUSTOM VALIDATORS
	private mustBeMatching(group: ControlGroup) {
		var password = group.find('password').value;
		var confirmPassword = group.find('confirmPassword').value;

		if (password == '' || confirmPassword == '') {
			return null;
		}

		if (password != confirmPassword) {
			return { mustBeMatching: true };
		}
		return null;
	}

	private isEmail(control: Control): {[s: string]: boolean} {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
		if (!control.value.match(regex)) {
			return { invalidMail: true };
		}
	}

	private hasMinComplexity(control: Control) {
		// const minLength = 6

		// if (control.value.length < minLength) {
		// 	return {
		// 		hasMinComplexity: { notMinLength: minLength }
		// 	}
		// } 

		if (control.value.indexOf(' ') >= 0) {
			return {
				hasMinComplexity: { noSpaces: true }
			}
		}

		return null
	}

}


