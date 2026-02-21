import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { RestaurantDeckComponent } from '../components/restaurant-deck/restaurant-deck.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'restaurants', component: RestaurantDeckComponent },
];
