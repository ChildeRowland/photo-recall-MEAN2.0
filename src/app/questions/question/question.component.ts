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
	answerResponse: string;

	@Input() question: Question;
	@Input() i: number;
	@Input() game: boolean = true;
	@Input() questionVisible: boolean = true;
	@Output() editClick = new EventEmitter<string>();

	userAnswer: string;

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

	checkAnswer() {
		let correctAnswers = this.question.answers.split(', ');

		for (var i = correctAnswers.length - 1; i >= 0; i--) {
			if (this.userAnswer == correctAnswers[i]) {

				return this.nextQuestion(1, "Correct!")
			}	
		}
		return this.nextQuestion(0, "Incorrect!");
	}

	nextQuestion(score, response) {
		let self = this;

		this.answerResponse = response;
		this.userAnswer = "";

		setTimeout(function() {
			self._questionService.updateScore(score);
			self.answerResponse = ""
		}, 2000);

	}

}
