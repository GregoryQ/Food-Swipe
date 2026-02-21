import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDeckComponent } from './restaurant-deck.component';

describe('RestaurantDeckComponent', () => {
  let component: RestaurantDeckComponent;
  let fixture: ComponentFixture<RestaurantDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
