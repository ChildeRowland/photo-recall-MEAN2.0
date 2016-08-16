import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	`]
})

export class LogoutComponent implements OnInit {

	constructor(private _authService: AuthService, private _router: Router) {}

	ngOnInit() {}

	onLogout() {
		this._authService.logout();
		this._router.navigateByUrl('/');
	}
}
