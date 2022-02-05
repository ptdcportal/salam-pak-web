import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalTripsComponent } from './seasonal-trips.component';

describe('SeasonalTripsComponent', () => {
  let component: SeasonalTripsComponent;
  let fixture: ComponentFixture<SeasonalTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonalTripsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
