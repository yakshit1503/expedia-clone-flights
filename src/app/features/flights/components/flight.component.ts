import { Component, inject } from '@angular/core';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightApiService } from '../services/flight-api.service';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [FlightListComponent],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss',
})
export class FlightComponent {
  private readonly flightApiService = inject(FlightApiService);

  protected readonly flights = this.flightApiService.getFlights();
}
