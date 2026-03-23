import { createFeature, createReducer } from '@ngrx/store';

export const flightsFeature = createFeature({
  name: 'flights',
  reducer: createReducer({ loading: false }),
});
