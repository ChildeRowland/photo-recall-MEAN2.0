import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class QuestionService {
	questions:any[] = [
		{ 
			question: "How many people are wearing hats",
			hint: "Answer with a number: 0 instead of zero",
			answers: "4"
		}
	];

	constructor() {}

	getQuestions() {
		return this.questions;
	}

}
