import { Component, OnInit } from '@angular/core';

import { QuestionListComponent } from '../questions/question-list/question-list.component';
import { QuestionInputComponent } from '../questions/question-input/question-input.component';

@Component({
	moduleId: module.id,
	selector: 'app-quiz',
	templateUrl: 'quiz.component.html',
	styleUrls: ['quiz.component.css'],
	directives: [ QuestionListComponent, QuestionInputComponent ]
})

export class QuizComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
