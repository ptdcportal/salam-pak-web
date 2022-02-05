import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTripsComponent } from './winter-trips.component';

describe('WinterTripsComponent', () => {
  let component: WinterTripsComponent;
  let fixture: ComponentFixture<WinterTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WinterTripsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
