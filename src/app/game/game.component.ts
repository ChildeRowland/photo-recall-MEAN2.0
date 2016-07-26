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
	imageVisible: boolean;
	score: number;

	constructor(private _questionService: QuestionService) {}

	ngOnInit() {
		this.imageVisible = false;
		this.game = true;
		this.questions = this._questionService.getQuestions();
		this.i = 0;
		this.question = this.questions[this.i];
		this.score = 0;

		this._questionService.addToScore.subscribe(num => {
			console.log(num);
			this.score += num;

			if ( this.i < this.questions.length - 1 ) {
				this.i ++;
				this.question = this.questions[this.i];
			}
		});
	}



}
