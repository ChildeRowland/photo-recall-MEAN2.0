import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../question.service';
import { QuestionComponent } from '../question/question.component';

@Component({
	moduleId: module.id,
	selector: 'app-question-list',
	templateUrl: 'question-list.component.html',
	styleUrls: ['question-list.component.css'],
	directives: [ QuestionComponent ]
})
export class QuestionListComponent implements OnInit {
	questions:any[];
	game: boolean;
	questionVisible: boolean;

	constructor(public _questionService:QuestionService) {}

	ngOnInit() {
		this.game = false;
		this.questionVisible = true;

		this.questions = this._questionService.getQuestions();
	}

	editClick(question, index, event){
		console.log(question, index, event);
	}

}
