import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss',
})
export class FlightListComponent {
  @Input({ required: true }) flights: Array<{ id: string; from: string; to: string }> = [];
}
