import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-form-error',
	templateUrl: 'form-error.component.html',
	styleUrls: ['form-error.component.css']
})

export class FormErrorComponent implements OnInit {
	@Input() message: string = 'Error Message';

	constructor() {}

	ngOnInit() {}

}
