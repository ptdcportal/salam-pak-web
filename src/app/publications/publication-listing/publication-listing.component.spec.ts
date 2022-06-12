import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListingComponent } from './publication-listing.component';

describe('PublicationListingComponent', () => {
  let component: PublicationListingComponent;
  let fixture: ComponentFixture<PublicationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationListingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
