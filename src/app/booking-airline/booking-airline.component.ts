import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-airline',
  templateUrl: './booking-airline.component.html',
  styleUrls: ['./booking-airline.component.scss']
})
export class BookingAirlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://www.google.com/travel/flights';
  }

}
