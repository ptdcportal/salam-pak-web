import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-buss-listing',
  templateUrl: './booking-buss-listing.component.html',
  styleUrls: ['./booking-buss-listing.component.scss']
})
export class BookingBussListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

}
