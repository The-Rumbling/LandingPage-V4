import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
const httpLoaderFactory:(http: HttpClient)=> TranslateLoader = (http: HttpClient)=> new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(),
    provideTranslateService({
      loader:{
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps:[HttpClient]
      },
      defaultLanguage: 'es'
    })
  ]
};
