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
			question: ['', Validators.compose([ this.questionValidators ])],
			answers: ['', Validators.compose([ this.questionValidators ])],
			hint: ['', Validators.compose([])],
			testInput: ['', Validators.compose([])]
		})
	}

	// RENDER MESSAGES
	isError(control: Control) {
		if ( control.touched && control.errors ) {
			return true;
		}
	}

	errMessage(control: Control) {
		return control.errors;
	}

	isInfo(control: Control) {
		if ( control.dirty ) {
			return true;
		}
	}

	infoMessage(control: Control) {
		return control;
	}

	// CUSTOM VALIDATORS 
	private checkAnswers(answers, testInput) {

		if (answers.value == '' || testInput.value == '') {
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
				testInput['message'] = "This would eval Correctly";
			} else {
				testInput['message'] = "This would eval Incorrectly";
			}
		}

		matchString(testInput.value, answers.value.split(' '), isMatching);
	}

	private questionValidators(control: Control) {
		var ctrl = control.value;

		if ( ctrl.length <= 0 ) {
			return { error: { message: "This field is required" } }
		}

		if ( ctrl.indexOf('?') < 0 ) {
			return { error: { message: "Should be in the form of a Question" } }
		}

		return null;
	}
}







