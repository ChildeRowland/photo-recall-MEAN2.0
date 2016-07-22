import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { QuestionService } from '../question.service';

@Component({
	moduleId: module.id,
	selector: 'app-question-list',
	templateUrl: 'question-list.component.html',
	styleUrls: ['question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
	questions:any[];

	constructor(public _questionService:QuestionService) {}

	ngOnInit() {
		this.questions = this._questionService.getQuestions();
		console.log(this.questions);
	}

}
