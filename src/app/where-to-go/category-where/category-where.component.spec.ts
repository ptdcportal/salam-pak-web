import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWhereComponent } from './category-where.component';

describe('CategoryWhereComponent', () => {
  let component: CategoryWhereComponent;
  let fixture: ComponentFixture<CategoryWhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryWhereComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
