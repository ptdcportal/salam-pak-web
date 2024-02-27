import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModuleListingComponent } from './booking-module-listing.component';

describe('BookingModuleListingComponent', () => {
  let component: BookingModuleListingComponent;
  let fixture: ComponentFixture<BookingModuleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingModuleListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModuleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
