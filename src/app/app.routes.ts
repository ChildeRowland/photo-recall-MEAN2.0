import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { GameComponent } from './game/game.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: '', component: FaqComponent }, 
	{ path: 'game', component: GameComponent }, 
	{ path: 'create', component: QuizComponent }, 
	{ path: 'profile', component: ProfileComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

// import { provideRouter, RouterConfig } from '@angular/router';

// import { FaqComponent } from './faq/faq.component';
// import { GameComponent } from './game/game.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { ProfileComponent } from './profile/profile.component';

// const routes: RouterConfig = [
//    	{ path: '', component: FaqComponent },
//    	{ path: 'game', component: GameComponent },
//   	{ path: 'create', component: QuizComponent },
//   	{ path: 'profile', component: ProfileComponent }
// ];

// export const appRouterProviders = [
//   	provideRouter(routes)
// ];