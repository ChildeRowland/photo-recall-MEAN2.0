import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';

import { User } from '../classes/user/user';
import { AuthService } from '../auth/auth.service'

@Component({
	moduleId: module.id,
	selector: 'app-signin',
	templateUrl: 'signin.component.html',
	styleUrls: ['signin.component.css'],
	providers: [ AuthService ]
})
export class SigninComponent implements OnInit {
	submitting = false;

	constructor(private _authService: AuthService) {}

	ngOnInit() {}

	signinSubmit(form:any) {
		this.submitting = true;
		const user:User = new User(form.email, form.password, null);

		this._authService.signin(user)
			.subscribe(data => {
				// remove for deploy
				console.log(data);
				localStorage.setItem('token', data.token);
				localStorage.setItem('salt', data.salt);
				localStorage.setItem('userId', data.userId);
			}, err => console.log(err),
			() => this.submitting = false);
	}

}
