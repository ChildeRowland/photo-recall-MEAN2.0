import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

import { Question } from '../../classes/question/question';

@Component({
	moduleId: module.id,
	selector: 'app-question-input',
	templateUrl: 'question-input.component.html',
	styleUrls: ['question-input.component.css']
})
export class QuestionInputComponent implements OnInit {
	questionForm: ControlGroup;

	constructor(private _fb:FormBuilder) {}

	ngOnInit() {
		this.questionForm = this._fb.group({
			question: ['', Validators.compose([ Validators.required ])],
			answers: ['', Validators.compose([ Validators.required ])],
			hint: ['', Validators.compose([])],
			testInput: ['', Validators.compose([])]
		}, { validator: this.checkAnswers })
	}

	// CUSTOM VALIDATORS 
	private checkAnswers(group: ControlGroup) {
		var answers = group.find('answers').value;
		var testInput = group.find('testInput').value;

		if (answers == '' || testInput == '') {
			return null;
		}

		var matchString = function (string, array, callback) {
			var match = 0;
			for (var i = 0; i < array.length; i++) {
	    		if ( string == array[i] ) {
	    			match++;
	    		}
			}
			callback(match);
		}

		var isMatching = function (number) {
			if ( number > 0 ) {
				console.log('There\'s a match');
			} else {
				console.log('No match');
			}
		}

		matchString(testInput, answers.split(' '), isMatching);
	}

}




