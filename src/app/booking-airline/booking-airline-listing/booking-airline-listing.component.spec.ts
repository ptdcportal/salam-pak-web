import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAirlineListingComponent } from './booking-airline-listing.component';

describe('BookingAirlineListingComponent', () => {
  let component: BookingAirlineListingComponent;
  let fixture: ComponentFixture<BookingAirlineListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAirlineListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAirlineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
