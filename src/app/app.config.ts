import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { Config } from 'contentstack';
import { localStorageMetaReducer } from './services/local-storage.metareducer';
import { LandingPageEffects } from './services/landing-page/landing-page.effects.service';
import { LandingPageState, landingPageReducer } from './services/landing-page/landing-page.reducer';

export const CONTENTSTACK_CONFIG = new InjectionToken<Config>('Config');

const contentstackConfig = {
  api_key: 'blt85eed4f6f2228de8',
  delivery_token: 'cs0a68a93af5a5da15442851e8',
  environment: 'development',
  region: 'EU',
  branch: 'main',
};

export interface AppState {
  landingPages: LandingPageState;
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: CONTENTSTACK_CONFIG, useValue: contentstackConfig },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideStore<AppState>(
      { landingPages: landingPageReducer },
      { metaReducers: [localStorageMetaReducer] }
    ),
    provideEffects([LandingPageEffects]),
    // provideStoreDevtools({ maxAge: 25 })
  ]
};
