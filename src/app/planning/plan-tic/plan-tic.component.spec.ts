import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTicComponent } from './plan-tic.component';

describe('PlanTicComponent', () => {
  let component: PlanTicComponent;
  let fixture: ComponentFixture<PlanTicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
