import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CredentialsService } from '../../auth/credentials.service';

@Component({
  selector: 'app-travel-itinerary',
  templateUrl: './travel-itinerary.component.html',
  styleUrls: ['./travel-itinerary.component.scss'],
})
export class TravelItineraryComponent implements OnInit {
  plan: any[] = [];

  constructor(private readonly eventService: EventService, private readonly credentialsService: CredentialsService) {}

  ngOnInit(): void {
    this.getUserPlan();
  }

  getUserPlan() {
    //  - gets the locations which user has added to plan...
    if (this.credentialsService.isAuthenticated()) {
      this.eventService.getUserPlan(localStorage.getItem('userId')).subscribe((plan) => {
        for (const prop in plan) {
          if (Object.prototype.hasOwnProperty.call(plan, prop)) {
            if (plan[prop].length > 0) {
              this.plan.push(plan[prop]);
            }
          }
        }
      });
    }
    // console.log('this.plan', this.plan);
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }
}
