import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState } from '../app.config';

const STORAGE_KEY = 'ReduxState';

export const localStorageMetaReducer = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
  return (state, action) => {
    if (action.type === INIT.toString() || action.type === UPDATE.toString()) {
      const storedState = localStorage.getItem(STORAGE_KEY);
      if (storedState) {
        try {
          const persisted = JSON.parse(storedState) as { timestamp: number; state: AppState };
          const now = Date.now();
          if (now - persisted.timestamp < 24 * 60 * 60 * 1000) {
            state = { ...state, ...persisted.state };
          } else {
            localStorage.removeItem(STORAGE_KEY);
          }
        } catch (error) {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ timestamp: Date.now(), state: nextState })
    );
    return nextState;
  };
}
