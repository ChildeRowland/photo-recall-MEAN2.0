import { enableProdMode } from '@angular/core';
import { environment } from './app/environment';

if (environment.production) {
    enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);



