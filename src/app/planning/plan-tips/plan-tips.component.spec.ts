import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTipsComponent } from './plan-tips.component';

describe('PlanTipsComponent', () => {
  let component: PlanTipsComponent;
  let fixture: ComponentFixture<PlanTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTipsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
