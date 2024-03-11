import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRailwayComponent } from './booking-railway.component';

describe('BookingRailwayComponent', () => {
  let component: BookingRailwayComponent;
  let fixture: ComponentFixture<BookingRailwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRailwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
