import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailSearchComponent } from './hotel-detail-search.component';

describe('HotelDetailSearchComponent', () => {
  let component: HotelDetailSearchComponent;
  let fixture: ComponentFixture<HotelDetailSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelDetailSearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
