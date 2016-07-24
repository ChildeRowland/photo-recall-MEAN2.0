import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { NgClass } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../classes/user/user';
import { AuthService } from '../auth/auth.service'
import { MessengerService } from '../services/messenger/messenger.service'

@Component({
	moduleId: module.id,
	selector: 'app-signin',
	templateUrl: 'signin.component.html',
	styleUrls: ['signin.component.css'],
	directives: [ REACTIVE_FORM_DIRECTIVES ],
	providers: [ AuthService, MessengerService ]
})

export class SigninComponent implements OnInit {
	signinForm: FormGroup;
	submitting = false;

	constructor(
		public messengerService:MessengerService,
		private _fb:FormBuilder, 
		private _authService: AuthService
	) {}

	ngOnInit() {
		this.signinForm = this._fb.group({
			email: ['', Validators.compose([ this.messengerService.generalValidators ])],
			password: ['', Validators.compose([ this.messengerService.generalValidators ])]
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

	// SERVER MESSAGES
	private serverMessage(code:number) {
		if (code == 404) {
			this.signinForm.find('email').setErrors({ error: { message: "User not found, check email" }});
		}
		if (code == 401) {
			this.signinForm.find('password').setErrors({ error: {message: "Incorrect credentials. Check email and Password" }});
		}
	}

}
