import { Component, OnInit } from '@angular/core';

import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
	moduleId: module.id,
	selector: 'app-auth',
	templateUrl: 'auth.component.html',
	styleUrls: ['auth.component.css'],
	directives: [ SignupComponent, SigninComponent, LogoutComponent ]
})

export class AuthComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
