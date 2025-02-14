import { createAction, props } from '@ngrx/store';
import { StackEntry } from '../models/stack-entry';

export const loadLandingPages = createAction('[Landing Pages] Load Landing Pages');

export const loadLandingPagesSuccess = createAction(
  '[Landing Pages] Load Landing Pages Success',
  props<{ stackEntry: StackEntry }>()
);

export const loadLandingPagesFailure = createAction(
  '[Landing Pages] Load Landing Pages Failure',
  props<{ error: any }>()
);
