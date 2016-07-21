import { provideRouter, RouterConfig } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: RouterConfig = [
   	{ path: '', component: FaqComponent },
  	{ path: 'create', component: QuizComponent }
];

export const appRouterProviders = [
  	provideRouter(routes)
];