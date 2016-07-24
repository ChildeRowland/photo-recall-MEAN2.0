import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../questions/question.service';
import { QuestionListComponent } from '../questions/question-list/question-list.component';
import { QuestionInputComponent } from '../questions/question-input/question-input.component';
import { ImageComponent } from '../image/image.component';

@Component({
	moduleId: module.id,
	selector: 'app-quiz',
	templateUrl: 'quiz.component.html',
	styleUrls: ['quiz.component.css'],
	directives: [ QuestionListComponent, QuestionInputComponent, ImageComponent ],
	providers: [ QuestionService ]
})

export class QuizComponent implements OnInit {
	imageVisible: boolean;

	constructor() {}

	ngOnInit() {
		this.imageVisible = true;
	}

}
