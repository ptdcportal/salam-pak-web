import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.scss'],
})
export class TripListingComponent implements OnInit {
  id: any;
  slug: any;
  data: any;
  locations: any;
  filteredRes: any[];
  p: number = 1;

  trips: any = [];

  constructor(private readonly route: ActivatedRoute, private readonly eventService: EventService) {
    this.trips = this.route.snapshot.data.trips;
    // console.log('trips: ', this.trips);
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }
}
