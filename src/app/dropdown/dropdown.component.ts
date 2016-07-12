import { Component, OnInit, Input } from '@angular/core';

import { SigninComponent } from '../signin/signin.component';

@Component({
	moduleId: module.id,
	selector: 'app-dropdown',
	template: `
		<ul class="nav navbar-nav">
			<li class="dropdown">
				<a (click)="show()" class="dropdown-toggle" role="button">
					{{ title }} 
					<span class="caret"></span></a>

				<ul class="dropdown-menu" *ngIf="isVisable">
					<li>
						<app-signin></app-signin>
					</li>
				</ul>
			</li>
		</ul>

	`,
	styles: [`
		.dropdown-menu{
			display: block;
			min-width: 450px;
		}
		.dropdown-menu>li {
			margin: 15px;
		}
	`],
	directives: [ SigninComponent ]
})
export class DropdownComponent implements OnInit {
	isVisable = false;
	@Input() title = 'Show';

	constructor() {}

	ngOnInit() {

	}

	show(){
		this.isVisable = !this.isVisable;
		console.log(this.isVisable);
	}

}
