import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Config } from 'contentstack';

// Config {
//     api_key: string;
//     delivery_token: string;
//     environment: string;
//     region?: Region;
//     branch?: string;
//     live_preview?: LivePreview;
//     plugins?: ContentstackPlugin[];
//     fetchOptions?: FetchOptions;
//     early_access?: string[]
// }

export const CONTENTSTACK_CONFIG = new InjectionToken<Config>('Config');

const contentstackConfig = {
  api_key: 'blt85eed4f6f2228de8',
  delivery_token: 'cs0a68a93af5a5da15442851e8',
  environment: 'development',
  region: 'EU',
  branch: 'main',
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: CONTENTSTACK_CONFIG, useValue: contentstackConfig },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    // provideStore({ landingPages: landingPageReducer }),
    // provideEffects([LandingPageEffects]),
    // provideStoreDevtools({ maxAge: 25 })
  ]
};
