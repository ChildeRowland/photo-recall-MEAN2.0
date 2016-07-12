import { Component, OnInit } from '@angular/core';

import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
	moduleId: module.id,
	selector: 'app-auth',
	templateUrl: 'auth.component.html',
	styleUrls: ['auth.component.css'],
	directives: [ SignupComponent, SigninComponent ]
})

export class AuthComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
