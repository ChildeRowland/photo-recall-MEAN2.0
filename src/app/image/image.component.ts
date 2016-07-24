import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-image',
	templateUrl: 'image.component.html',
	styleUrls: ['image.component.css']
})
export class ImageComponent implements OnInit {
	@Input() imageVisible: boolean;

	constructor() {}

	ngOnInit() {}

	startGame() {
		let self = this;

		this.imageVisible = true;

		setTimeout(function() {
			self.imageVisible = false;
		}, 10000);
	}

}
