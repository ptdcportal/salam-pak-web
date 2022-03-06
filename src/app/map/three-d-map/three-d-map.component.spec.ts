import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDMapComponent } from './three-d-map.component';

describe('ThreeDMapComponent', () => {
  let component: ThreeDMapComponent;
  let fixture: ComponentFixture<ThreeDMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDMapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
