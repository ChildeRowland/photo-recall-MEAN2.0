import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms'

@Injectable()

export class MessengerService {

  constructor() {}

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
	generalValidators(control: FormControl) {
		var ctrl = control.value;

		if ( ctrl.length <= 0 ) {
			return { error: { message: "This field is required" } }
		}

		return null;
	}

	isEmail(control: FormControl) {
		let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
		if (!control.value.match(regex)) {
			return { 
				error: { message: "This doesn't appear to be a valid email" } 
			} 
		}

		return null;
	}

	hasMinComplexity(control: FormControl) {
		const minLength = 6

		if (control.value.length < minLength) {
			return {
				error: { message: "Field must have a minimum of 6 Characters" } 
			}
		} 

		if (control.value.indexOf(' ') >= 0) {
			return {
				error: { message: "Field cannot contain spaces" }
			}
		}

		return null
	}

}
