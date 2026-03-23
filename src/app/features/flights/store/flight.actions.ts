import { createActionGroup, emptyProps } from '@ngrx/store';

export const flightActions = createActionGroup({
  source: 'Flights',
  events: {
    'Load Flights': emptyProps(),
  },
});
