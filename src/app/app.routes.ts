import { provideRouter, RouterConfig } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { QuestionInputComponent } from './questions/question-input/question-input.component';

const routes: RouterConfig = [
   	{ path: '', component: FaqComponent },
  	{ path: 'create', component: QuestionInputComponent }
];

export const appRouterProviders = [
  	provideRouter(routes)
];