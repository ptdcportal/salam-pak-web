import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAirlineComponent } from './booking-airline.component';

describe('BookingAirlineComponent', () => {
  let component: BookingAirlineComponent;
  let fixture: ComponentFixture<BookingAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
