import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'app-profile',
	templateUrl: 'profile.component.html',
	styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {

	constructor(private _router: Router) {}

	ngOnInit() {
		// this.isUser();
	}

	isUser() {
		if (!localStorage.getItem('token')) {
			this._router.navigateByUrl('/');
		}
	}

}
