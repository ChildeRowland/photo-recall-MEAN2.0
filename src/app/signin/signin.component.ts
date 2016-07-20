import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../classes/user/user';
import { AuthService } from '../auth/auth.service'

@Component({
	moduleId: module.id,
	selector: 'app-signin',
	templateUrl: 'signin.component.html',
	styleUrls: ['signin.component.css'],
	directives: [ REACTIVE_FORM_DIRECTIVES ],
	providers: [ AuthService ]
})
export class SigninComponent implements OnInit {
	signinForm: FormGroup;
	submitting = false;

	constructor(private _fb:FormBuilder, private _authService: AuthService) {}

	ngOnInit() {
		this.signinForm = this._fb.group({
			email: ['', Validators.compose([ this.questionValidators ])],
			password: ['', Validators.compose([ this.questionValidators ])]
		})
	}

	signinSubmit() {
		this.submitting = true;
		const user:User = new User(this.signinForm.value.email, this.signinForm.value.password, null);

		this._authService.signin(user)
			.subscribe(data => {
				// remove for deploy
				console.log(data.message);
				localStorage.setItem('token', data.token);
				localStorage.setItem('salt', data.salt);
				localStorage.setItem('userId', data.userId);
			}, err => { 
				console.log(err);
				this.serverMessage(err.code);
				this.submitting = false;
			}, () => this.submitting = false);
	}

	serverMessage(code:number) {
		if (code == 404) {
			this.signinForm.find('email').setErrors({ error: { message: "User not found, check email" }});
		}
		if (code == 401) {
			this.signinForm.find('password').setErrors({ error: {message: "Incorrect credentials. Check email and Password" }});
		}
	}

	// RENDER MESSAGES
	isError(control: FormControl) {
		if ( control.touched && control.errors ) {
			return true;
		}
	}

	errMessage(control: FormControl) {
		return control.errors;
	}

	isInfo(control: FormControl) {
		if ( control.dirty && control.value.length > 0) {
			return true;
		}
	}

	infoMessage(control: FormControl) {
		return control;
	}

	private questionValidators(control: FormControl) {
		var ctrl = control.value;

		if ( ctrl.length <= 0 ) {
			return { error: { message: "This field is required" } }
		}

		return null;
	}

}
