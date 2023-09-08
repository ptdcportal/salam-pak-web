import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTripsComponent } from './summer-trips.component';

describe('SummerTripsComponent', () => {
  let component: SummerTripsComponent;
  let fixture: ComponentFixture<SummerTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummerTripsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
