import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationCategoryComponent } from './accomodation-category.component';

describe('AccomodationCategoryComponent', () => {
  let component: AccomodationCategoryComponent;
  let fixture: ComponentFixture<AccomodationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationCategoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
