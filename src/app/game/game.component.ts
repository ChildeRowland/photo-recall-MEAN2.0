import { Component, OnInit } from '@angular/core';

import { Question } from '../classes/question/question';
import { QuestionService } from '../questions/question.service';
import { QuestionComponent } from '../questions/question/question.component';
import { ImageComponent } from '../image/image.component';

@Component({
	moduleId: module.id,
	selector: 'app-game',
	templateUrl: 'game.component.html',
	styleUrls: ['game.component.css'],
	directives: [ QuestionComponent, ImageComponent ],
	providers: [ QuestionService ]
})

export class GameComponent implements OnInit {
	i: number;
	game: boolean;
	questions: any[];
	question: Question;
	questionVisible: boolean;
	imageVisible: boolean;
	score: number;
	// move to summary component 
	summary: string;

	constructor(private _questionService: QuestionService) {}

	ngOnInit() {
		this.questionVisible = false;
		this.imageVisible = false;
		this.game = true;
		this.questions = this._questionService.getQuestions();
		this.i = 0;
		this.question = this.questions[this.i];
		this.score = 0;

		// check the user's score
		this._questionService.addToScore.subscribe(num => {
			this.score += num;

			if ( this.i < this.questions.length ) {
				this.i ++;
				this.question = this.questions[this.i];
			}

			if ( this.i == this.questions.length ) {
				this.questionVisible = false;
				this.imageVisible = true;
				this.summary = `You got ${this.score} out of ${this.questions.length}`;
			}

		});

		// check if user is read for questions
		this._questionService.readyForGame.subscribe(bool => {
			if ( bool ) {
				this.questionVisible = bool;
				document.getElementById("title").scrollIntoView();
			}
		});
	}

}
