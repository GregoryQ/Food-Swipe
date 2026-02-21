import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../../app/models/restaurant';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent {
  @Input() restaurant!: Restaurant;

  @Output() swipe = new EventEmitter<string>();
  //  @Output() swipeRight = new EventEmitter<void>();
  // @Output() swipeLeft = new EventEmitter<void>();

  // @Input() isActive!: boolean;
  // @Input() index!: number;
  // @Input() activeIndex!: number;

  // @Output() swipeRight = new EventEmitter<void>();
  // @Output() swipeLeft = new EventEmitter<void>();

  // startX = 0;
  // currentX = 0;
  // dragging = false;
  // transform = '';

  // onStart(event: PointerEvent) {
  //   if (!this.isActive) return; // only top card draggable

  //   this.dragging = true;
  //   this.startX = event.clientX;
  // }

  // onMove(event: PointerEvent) {
  //   if (!this.dragging) return;

  //   this.currentX = event.clientX;
  //   const diff = this.currentX - this.startX;

  //   this.transform = `
  //     translateX(${diff}px)
  //     rotate(${diff * 0.05}deg)
  //   `;
  // }

  // onEnd() {
  //   if (!this.dragging) return;

  //   this.dragging = false;
  //   const diff = this.currentX - this.startX;

  //   if (diff > 120) {
  //     this.swipeRight.emit();
  //   } else if (diff < -120) {
  //     this.swipeLeft.emit();
  //   }

  //   this.transform = '';
  // }

  onSwipeLeft() {
    this.swipe.emit('left');
  }
  onSwipeRight() {
    this.swipe.emit('right');
  }

  goToLink() {
    if (this.restaurant.link) {
      window.open(this.restaurant.link, '_blank');
    }
  }
}
