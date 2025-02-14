import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContentStackService } from '../services/content-stack.service';
import { LandingPageState } from './landing-page.reducer';
import { StackEntry } from '../models/stack-entry';
import { loadLandingPages, loadLandingPagesSuccess, loadLandingPagesFailure } from './landing-page.actions';

@Injectable({ providedIn: 'root' })
export class LandingPageEffects {

  contentStackService = inject(ContentStackService);
  actions$ = inject(Actions);
  store = inject(Store<{ landingPages: LandingPageState }>);

  loadLandingPages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLandingPages),
      withLatestFrom(this.store.select(state => state.landingPages.loaded)),
      filter(([action, loaded]) => !loaded),
      mergeMap(() =>
        this.contentStackService.fetchLandingPages().pipe(
          map(response => {
            const entry: StackEntry = response[0][0] as StackEntry;
            return loadLandingPagesSuccess({ stackEntry: entry });
          }),
          catchError(error => of(loadLandingPagesFailure({ error })))
        )
      )
    )
  );
}
