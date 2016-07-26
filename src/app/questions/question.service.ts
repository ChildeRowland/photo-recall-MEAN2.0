import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Question } from '../classes/question/question';

@Injectable()

export class QuestionService {
	questionIsEditable = new EventEmitter<Object>();
	// move to user service
	addToScore = new EventEmitter<number>();

	questions:any[] = [
		{
			question: "How many people are in the photo?",
			hint: "Answer with a number: 0 instead of zero",
			answers: "5, five, Five"
		}, { 
			question: "How many women are pictured?",
			hint: "Answer with a number: 0 instead of zero",
			answers: "0, zero, Zero"
		}, {
			question: "How many people are wearing glasses?",
			hint: "Answer with a number: 0 instead of zero",
			answers: "3, three, Three"
		}, {
			question: "How many plaid/checkered shirts are visible?",
			hint: "Answer with a number: 0 instead of zero",
			answers: "4, four, Four"
		}, {
			question: "Enter something printed on one of the name tags",
			hint: "Input only one word or abbreviation: Dale or USA",
			answers: "SFPE, sfpe, Tony, Jeff, Harrington, Richard, Davis, Robert, Sarge"
		}
	];

	constructor() {}

	getQuestions() {
		return this.questions;
	}

	addQuestion(question) {
		this.questions.push(question);
	}

	editQuestion(question, index) {
		this.questionIsEditable.emit({ qstn: question, idx: index });
	}

	updateQuestion(question, index) {
		this.questions.splice(index, 1, question);
	}

	deleteQuestion(index) {
		this.questions.splice(index, 1);
	}

	//SCORE CARD
	updateScore(number) {
		this.addToScore.emit(number);
	}

}
