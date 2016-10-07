import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FaqComponent } from './faq/faq.component';
import { GameComponent } from './game/game.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './auth/auth.service';

@NgModule({
	imports: [ // module dependencies
		BrowserModule, 
		routing, 
		HttpModule, 
		FormsModule, 
		ReactiveFormsModule 
	], 

	declarations: [ // components and directives
		AppComponent, 
		NavigationComponent, 
		FaqComponent,
		GameComponent, 
		QuizComponent, 
		ProfileComponent 
	], 

	providers: [ // services
		appRoutingProviders, 
		AuthService, 
		FormBuilder 
	],

  	bootstrap: [ AppComponent ] // root component
})

export class AppModule { }