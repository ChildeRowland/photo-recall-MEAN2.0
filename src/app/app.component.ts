import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

import { UploadimageComponent } from './uploadimage/uploadimage.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ ROUTER_DIRECTIVES, NavigationComponent, UploadimageComponent ],
})

export class AppComponent {
	title: string = 'Photo Recall';

	constructor() {}

	ngOnInit() {}
}


