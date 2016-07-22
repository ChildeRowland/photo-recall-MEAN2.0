import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { QuestionService } from '../question.service';

@Component({
	moduleId: module.id,
	selector: 'app-question-list',
	templateUrl: 'question-list.component.html',
	styleUrls: ['question-list.component.css'],
	providers: [ QuestionService ]
})
export class QuestionListComponent implements OnInit {

	constructor(public _questionService:QuestionService) {}

	ngOnInit() {}

}
