import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanGettingArroundComponent } from './plan-getting-arround.component';

describe('PlanGettingArroundComponent', () => {
  let component: PlanGettingArroundComponent;
  let fixture: ComponentFixture<PlanGettingArroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanGettingArroundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanGettingArroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
