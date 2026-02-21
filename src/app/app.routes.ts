import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { RestaurantDeckComponent } from '../components/restaurant-deck/restaurant-deck.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'restaurants', component: RestaurantDeckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
