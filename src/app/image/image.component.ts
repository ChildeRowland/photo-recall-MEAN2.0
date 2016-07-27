import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { QuestionService } from '../questions/question.service';

@Component({
	moduleId: module.id,
	selector: 'app-image',
	templateUrl: 'image.component.html',
	styleUrls: ['image.component.css']
})

export class ImageComponent implements OnInit {
	instructionsImage: boolean;
	instructionsQuestion: boolean;

	@Input() imageVisible: boolean;

	constructor(private _questionService: QuestionService) {}

	ngOnInit() {
		this.instructionsImage = true;
		this.instructionsQuestion = false;
	}

	showImage() {
		let self = this;

		this.imageVisible = true;

		setTimeout(function() {
			self.imageVisible = false;
			self.instructionsImage = false;
			self.instructionsQuestion = true;
		}, 10000);
	}

	startGame() {
		this.instructionsQuestion = false;
		this._questionService.readyForGame.emit(true);
	}

}
