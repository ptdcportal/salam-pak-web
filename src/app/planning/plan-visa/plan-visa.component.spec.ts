import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVisaComponent } from './plan-visa.component';

describe('PlanVisaComponent', () => {
  let component: PlanVisaComponent;
  let fixture: ComponentFixture<PlanVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanVisaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
