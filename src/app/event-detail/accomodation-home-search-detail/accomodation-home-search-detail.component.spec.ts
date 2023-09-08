import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationHomeSearchDetailComponent } from './accomodation-home-search-detail.component';

describe('AccomodationHomeSearchDetailComponent', () => {
  let component: AccomodationHomeSearchDetailComponent;
  let fixture: ComponentFixture<AccomodationHomeSearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationHomeSearchDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationHomeSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
