import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  showBrowseButton: boolean;
  showStars: boolean;

  accomodationCategories: any = [];
  constructor(private readonly eventService: EventService) {
    this.eventService.getAccomodationCategories().subscribe((categories) => {
      this.accomodationCategories = categories;
      this.showBrowseButton = true;
      this.showStars = true;
    });
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
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
