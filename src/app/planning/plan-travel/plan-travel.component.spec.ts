import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTravelComponent } from './plan-travel.component';

describe('PlanTravelComponent', () => {
  let component: PlanTravelComponent;
  let fixture: ComponentFixture<PlanTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTravelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
