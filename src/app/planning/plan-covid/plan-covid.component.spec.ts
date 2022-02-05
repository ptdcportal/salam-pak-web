import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCovidComponent } from './plan-covid.component';

describe('PlanCovidComponent', () => {
  let component: PlanCovidComponent;
  let fixture: ComponentFixture<PlanCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCovidComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
