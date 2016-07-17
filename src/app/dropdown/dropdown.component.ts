import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
	moduleId: module.id,
	selector: 'app-dropdown',
	host: { '(document:click)': 'handleClick($event)' },
	templateUrl: 'dropdown.component.html',
	styleUrls: ['dropdown.component.css'],
	directives: [ SigninComponent, SignupComponent ]
})

export class DropdownComponent implements OnInit {
	public elementRef;
	isVisable: boolean = false;
	@Input() title: string = 'Show';

	constructor(myElement: ElementRef) {
       this.elementRef = myElement;
   	}

	ngOnInit() {}

	showMenu(){
		this.isVisable = !this.isVisable;
	}

	// check to see if user clicks outside the dropdown
	handleClick(event){
       var clickedComponent = event.target;
       var inside = false;
       do {
           if (clickedComponent === this.elementRef.nativeElement) {
               inside = true;
           }
           clickedComponent = clickedComponent.parentNode;
       } while (clickedComponent);
       if(this.isVisable && !inside) {
           this.isVisable = false;
       }
   }

}
