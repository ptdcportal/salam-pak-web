import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePakistanComponent } from './explore-pakistan.component';

describe('ExplorePakistanComponent', () => {
  let component: ExplorePakistanComponent;
  let fixture: ComponentFixture<ExplorePakistanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePakistanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
