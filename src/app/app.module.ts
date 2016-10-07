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
  imports: [ BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule ], // module dependencies

  declarations: [ AppComponent, NavigationComponent, FaqComponent,
  				  GameComponent, QuizComponent, ProfileComponent ], // components and directives

  bootstrap: [ AppComponent ],     		// root component

  providers: [ appRoutingProviders, AuthService, FormBuilder ]   // services
})

export class AppModule { }