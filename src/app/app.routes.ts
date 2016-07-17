import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionInputComponent } from './questions/question-input/question-input.component';

const routes: RouterConfig = [
  	// { path: '', component: AppComponent },
  	{ path: '', component: QuestionInputComponent }
];

export const appRouterProviders = [
  	provideRouter(routes)
];