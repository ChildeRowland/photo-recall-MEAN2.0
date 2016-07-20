import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from '../../classes/question/question';
import { MessengerService } from '../../services/messenger/messenger.service';

@Component({
	moduleId: module.id,
	selector: 'app-question-input',
	templateUrl: 'question-input.component.html',
	styleUrls: ['question-input.component.css'],
	directives: [ REACTIVE_FORM_DIRECTIVES ],
	providers: [ MessengerService ]
})
export class QuestionInputComponent implements OnInit {
	questionForm: FormGroup;

	constructor(public messengerService:MessengerService, private _fb:FormBuilder) {}

	ngOnInit() {
		this.questionForm = this._fb.group({
			question: ['', Validators.compose([ this.messengerService.generalValidators ])],
			answers: ['', Validators.compose([ this.messengerService.generalValidators ])],
			hint: ['', Validators.compose([])],
			testInput: ['', Validators.compose([])]
		})
	}

	addQuestion() {
		console.log(this.questionForm.value);
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

}







