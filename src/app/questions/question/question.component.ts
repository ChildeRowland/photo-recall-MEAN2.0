import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../classes/question/question';
import { QuestionService } from '../question.service';

@Component({
	moduleId: module.id,
	selector: 'app-question',
	templateUrl: 'question.component.html',
	styleUrls: ['question.component.css']
})
export class QuestionComponent implements OnInit {
	@Input() question: Question;
	@Input() i: number;
	@Input() game: boolean = true;
	@Output() editClick = new EventEmitter<string>();

	constructor(private _questionService: QuestionService) {}

	ngOnInit() {}

	onEdit() {
		this._questionService.editQuestion(this.question, this.i);
		// temp solution for lack of Angular2 abchor links
		document.getElementById("question-title").scrollIntoView();
	}

	onDelete() {
		this._questionService.deleteQuestion(this.i);
	}

}
