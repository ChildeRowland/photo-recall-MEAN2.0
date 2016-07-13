import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service'

@Component({
	moduleId: module.id,
	selector: 'app-logout',
	template: `
		<button class="btn btn-warning" (click)="onLogout()">Log Out</button>
	`,
	styles: [`
		button {
			margin: 8px;
		}
	`],
	providers: [ AuthService ]
})
export class LogoutComponent implements OnInit {

	constructor(private _authService: AuthService) {}

	ngOnInit() {}

	onLogout() {
		this._authService.logout();
		console.log(localStorage);
	}
}
