import { Injectable } from '@angular/core';

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
		return this.questions
	}

	postQuestion(question) {
		this.questions.push(question);
	}

}
