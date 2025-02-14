import { createReducer, on } from '@ngrx/store';
import { StackEntry } from '../models/stack-entry';
import { loadLandingPages, loadLandingPagesSuccess, loadLandingPagesFailure } from './landing-page.actions';

export interface LandingPageState {
  stackEntry: StackEntry | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: LandingPageState = {
  stackEntry: null,
  loading: false,
  loaded: false,
  error: null
};

export const landingPageReducer = createReducer(
  initialState,
  on(loadLandingPages, state => ({
    ...state,
    loading: true
  })),
  on(loadLandingPagesSuccess, (state, { stackEntry }) => ({
    ...state,
    stackEntry,
    loading: false,
    loaded: true
  })),
  on(loadLandingPagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  }))
);
