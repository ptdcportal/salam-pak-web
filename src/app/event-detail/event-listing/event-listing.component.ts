import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss'],
})
export class EventListingComponent implements OnInit {
  id: any;
  slug: any;
  data: any;
  locations: any;
  filteredRes: any[];
  p: number = 1;

  events: any = [];

  constructor(private readonly route: ActivatedRoute, private readonly eventService: EventService) {
    this.events = this.route.snapshot.data.events.data;
    // console.log('trips: ', this.events);
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
