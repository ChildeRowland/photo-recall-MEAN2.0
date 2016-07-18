import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-form-error',
	templateUrl: 'form-error.component.html',
	styleUrls: ['form-error.component.css']
})

export class FormErrorComponent implements OnInit {

	@Input() data;

	constructor() {}

	ngOnInit() {}

	// isError(control: Control, location){
		
	// 	if ( control.touched && control.errors ) {

	// 		location.message = control.errors['error']['message'];
	// 		location.alertType = "alert-danger";
	// 		return true;
	// 	}

	// }

}
