import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss'],
})
export class CategoryListingComponent implements OnInit {
  id: any;
  slug: any;
  data: any;
  locations: any;
  filteredRes: any[];
  p: number = 1;

  constructor(private readonly route: ActivatedRoute, private readonly eventService: EventService) {
    this.data = this.route.snapshot.data.category
      ? this.route.snapshot.data.category
      : this.route.snapshot.data.location;
    this.slug = this.data.location ? this.data.slug : '';

    this.route.snapshot.data.category ? this.getCategoryLocations(this.data._id) : this.getLocationsListing(this.slug);
  }

  ngOnInit(): void {
    alert('herer');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // this.loadScript()
  }

  getCategoryLocations(id: string) {
    this.eventService.getCategoryLocations(id).then((locs) => {
      this.filteredRes = locs.filter((i: any) => {
        return (i.isFeatured = true);
      });
    });
  }

  getLocationsListing(slug: string) {
    this.eventService.getTrips(slug).subscribe((locs) => {
      this.filteredRes = locs.filter((i: any) => {
        return (i.isFeatured = true);
      });
    });
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }
  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/where-to-go.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
