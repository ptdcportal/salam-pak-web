import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBussListingComponent } from './booking-buss-listing.component';

describe('BookingBussListingComponent', () => {
  let component: BookingBussListingComponent;
  let fixture: ComponentFixture<BookingBussListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingBussListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBussListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
