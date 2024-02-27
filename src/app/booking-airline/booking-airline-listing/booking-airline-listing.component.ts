import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-airline-listing',
  templateUrl: './booking-airline-listing.component.html',
  styleUrls: ['./booking-airline-listing.component.scss']
})
export class BookingAirlineListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

}
