import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlightApiService {
  getFlights(): Array<{ id: string; from: string; to: string }> {
    return [
      { id: '1', from: 'Toronto', to: 'New York' },
      { id: '2', from: 'Vancouver', to: 'Calgary' },
    ];
  }
}
