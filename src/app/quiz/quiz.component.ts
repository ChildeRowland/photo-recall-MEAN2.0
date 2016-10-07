import { Component, OnInit } from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { QuestionService } from '../questions/question.service';
import { QuestionListComponent } from '../questions/question-list/question-list.component';
import { QuestionInputComponent } from '../questions/question-input/question-input.component';
import { ImageComponent } from '../image/image.component';

@Component({
	moduleId: module.id,
	selector: 'app-quiz',
	templateUrl: 'quiz.component.html',
	styleUrls: ['quiz.component.css'],
	directives: [ QuestionListComponent, QuestionInputComponent, ImageComponent,
				  FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES ],
	providers: [ QuestionService, FORM_PROVIDERS ]
})

export class QuizComponent implements OnInit {
	imageVisible: boolean;

	constructor() {}

	ngOnInit() {
		this.imageVisible = true;
	}

}
