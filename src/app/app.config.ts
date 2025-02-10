import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CONTENTSTACK_CONFIG } from './services/content-stack.service';

const contentstackConfig = {
  api_key: 'YOUR_API_KEY',
  delivery_token: 'YOUR_DELIVERY_TOKEN',
  environment: 'YOUR_ENVIRONMENT'
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: CONTENTSTACK_CONFIG, useValue: contentstackConfig },
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideStore({ landingPages: landingPageReducer }),
    // provideEffects([LandingPageEffects]),
    // provideStoreDevtools({ maxAge: 25 })
  ]
};
