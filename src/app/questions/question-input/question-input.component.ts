import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from '../../classes/question/question';

@Component({
	moduleId: module.id,
	selector: 'app-question-input',
	templateUrl: 'question-input.component.html',
	styleUrls: ['question-input.component.css'],
	directives: [ REACTIVE_FORM_DIRECTIVES ]
})
export class QuestionInputComponent implements OnInit {
	questionForm: FormGroup;

	constructor(private _fb:FormBuilder) {}

	ngOnInit() {
		this.questionForm = this._fb.group({
			question: ['', Validators.compose([ this.questionValidators ])],
			answers: ['', Validators.compose([ this.questionValidators ])],
			hint: ['', Validators.compose([])],
			testInput: ['', Validators.compose([])]
		})
	}

	addQuestion() {
		console.log(this.questionForm.value);
	}

	// RENDER MESSAGES
	isError(control: FormControl) {
		if ( control.touched && control.errors ) {
			return true;
		}
	}

	errMessage(control: FormControl) {
		return control.errors;
	}

	isInfo(control: FormControl) {
		if ( control.dirty && control.value.length > 0) {
			return true;
		}
	}

	infoMessage(control: FormControl) {
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
				testInput['message'] = "This answer would be Correct";
				testInput['alert'] = "alert-info";
			} else {
				testInput['message'] = "This answer would be Incorrect";
				testInput['alert'] = "alert-warning";
			}
		}

		matchString(testInput.value, answers.value.split(' '), isMatching);
	}

	private questionValidators(control: FormControl) {
		var ctrl = control.value;

		if ( ctrl.length <= 0 ) {
			return { error: { message: "This field is required" } }
		}

		return null;
	}
}







