import { Component, OnInit } from '@angular/core';

import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
	moduleId: module.id,
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html',
	styleUrls: ['navigation.component.css'],
	directives: [ DropdownComponent ]
})
export class NavigationComponent implements OnInit {
	title = "Sign In"

	constructor() {}

	ngOnInit() {
	}

}
