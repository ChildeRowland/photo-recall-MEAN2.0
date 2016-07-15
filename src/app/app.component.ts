import { Component } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ NavigationComponent, UploadimageComponent ],
})

export class AppComponent {
	title = 'Hello Taco';

	constructor() {}

	ngOnInit() {}
}


