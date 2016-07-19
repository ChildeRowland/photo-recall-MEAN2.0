import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ HTTP_PROVIDERS, 
						  appRouterProviders, 
						  provide(LocationStrategy, {useClass: HashLocationStrategy})
						])
	.catch(err => console.error(err));

