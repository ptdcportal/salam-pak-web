import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringTripsComponent } from './spring-trips.component';

describe('SpringTripsComponent', () => {
  let component: SpringTripsComponent;
  let fixture: ComponentFixture<SpringTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpringTripsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
