import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanGettingHereComponent } from './plan-getting-here.component';

describe('PlanGettingHereComponent', () => {
  let component: PlanGettingHereComponent;
  let fixture: ComponentFixture<PlanGettingHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanGettingHereComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanGettingHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
