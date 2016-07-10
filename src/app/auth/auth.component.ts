import { Component, OnInit } from '@angular/core';

import { SignupComponent } from '../signup/signup.component';

@Component({
	moduleId: module.id,
	selector: 'app-auth',
	templateUrl: 'auth.component.html',
	styleUrls: ['auth.component.css'],
	directives: [ SignupComponent ]
})

export class AuthComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
