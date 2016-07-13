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

	constructor(private _fb:FormBuilder, private _authService: AuthService) {}

	ngOnInit() {
		this.signupForm = this._fb.group({
			name: ['', Validators.compose([ Validators.required ])],
			email: ['', Validators.compose([ Validators.required ])],
			password: ['', Validators.compose([ Validators.required ])],
			confirmPassword: ['', Validators.required]
		});
	}

	onSignup() {
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
				data => console.log(data),
				err => console.log(err));
	}
}
