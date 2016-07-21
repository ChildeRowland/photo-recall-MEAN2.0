import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../question.service';

@Component({
	moduleId: module.id,
	selector: 'app-question-list',
	templateUrl: 'question-list.component.html',
	styleUrls: ['question-list.component.css'],
	providers: [ QuestionService ]
})
export class QuestionListComponent implements OnInit {
	questions:any[];

	constructor(private _questionService:QuestionService) {}

	ngOnInit() {
		this.questions = this._questionService.getQuestions();
	}

}
