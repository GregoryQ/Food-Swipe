import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantDeckComponent } from '../components/restaurant-deck/restaurant-deck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantDeckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Restaurant_Slide';
}
