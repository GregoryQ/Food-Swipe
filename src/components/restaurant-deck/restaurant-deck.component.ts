import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { Restaurant } from '../../app/models/restaurant';
import { RESTAURANTS } from '../../assets/restaurants.data';

@Component({
  selector: 'app-restaurant-deck',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './restaurant-deck.component.html',
  styleUrls: ['./restaurant-deck.component.css'],
})
export class RestaurantDeckComponent {
  listRestaurants: Restaurant[] = RESTAURANTS;
  activeIndex = 0;

  private startX = 0;
  private endX = 0;
  private threshold = 50; // minimum px required to count as swipe
  translateX = 0;
  isDragging = false;

  getCardTransform(i: number): string {
    const offset = i - this.activeIndex;

    if (offset < 0) return 'translateX(-150%)'; // already swiped

    if (offset === 0) {
      return `
      translateX(${this.translateX}px)
      rotate(${this.translateX / 20}deg)
    `;
    }

    return `
    scale(${1 - offset * 0.05})
    translateX(${offset * 12}px)
  `;
  }

  private onSwipeRight() {
    // show next card
    console.log('starting index' + this.activeIndex);
    this.activeIndex = (this.activeIndex + 1) % this.listRestaurants.length;
    console.log('new index' + this.activeIndex);
  }

  private onSwipeLeft() {
    // show previous card
    console.log('starting index' + this.activeIndex);
    this.activeIndex =
      (this.activeIndex - 1 + this.listRestaurants.length) %
      this.listRestaurants.length;
    console.log('new index' + this.activeIndex);
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.changedTouches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;

    const currentX = event.changedTouches[0].clientX;
    this.translateX = currentX - this.startX;
  }

  onTouchEnd(event: TouchEvent) {
    this.isDragging = false;
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const distance = this.endX - this.startX;

    if (Math.abs(distance) < this.threshold) {
      return; // too small → ignore
    }

    if (distance > 0) {
      console.log('Swiped Right');
      this.translateX = this.translateX > 0 ? 1000 : -1000;

      // setTimeout(() => {
      this.translateX = 0;
      this.onSwipeRight(); // or left
      // }, 250);
      // this.onSwipeRight();
    } else {
      console.log('Swiped Left');
      // this.onSwipeLeft();
      this.translateX = this.translateX > 0 ? 1000 : -1000;

      // setTimeout(() => {
      this.translateX = 0;
      this.onSwipeRight(); // or left
      // }, 250);
    }
  }

  openList() {
    window.open('https://maps.app.goo.gl/rGej5FxKiViJApqcA', '_blank');
  }
}
