import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
	moduleId: module.id,
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html',
	styleUrls: ['navigation.component.css'],
	directives: [ ROUTER_DIRECTIVES, DropdownComponent, LogoutComponent ]
})
export class NavigationComponent implements OnInit {
	signinTitle = "Sign In";
	signupTitle = "New User";

	constructor() {}

	ngOnInit() {}

	// check for user token in local storage
	// move this to a service and verify the user token hasn't expired
	isUser() {
		return localStorage.getItem('token') != undefined;
	}

}
