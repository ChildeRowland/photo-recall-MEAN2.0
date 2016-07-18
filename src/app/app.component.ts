import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ ROUTER_DIRECTIVES, NavigationComponent ],
})

export class AppComponent {
	title: string = 'Photo Recall';

	constructor() {}

	ngOnInit() {}
}


