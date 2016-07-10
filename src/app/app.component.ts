import { Component } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { AuthComponent } from './auth/auth.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ NavigationComponent, AuthComponent ]
})

export class AppComponent {
	title = 'Hello Taco';
}
