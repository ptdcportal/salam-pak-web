import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationHomeSearchAgodaDetailComponent } from './accomodation-home-search-agoda-detail.component';

describe('AccomodationHomeSearchAgodaDetailComponent', () => {
  let component: AccomodationHomeSearchAgodaDetailComponent;
  let fixture: ComponentFixture<AccomodationHomeSearchAgodaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationHomeSearchAgodaDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AccomodationHomeSearchAgodaDetailComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
