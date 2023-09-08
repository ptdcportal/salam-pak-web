import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallTripsComponent } from './fall-trips.component';

describe('FallTripsComponent', () => {
  let component: FallTripsComponent;
  let fixture: ComponentFixture<FallTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FallTripsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
