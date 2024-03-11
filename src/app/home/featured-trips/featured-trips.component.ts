import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import * as moment from 'moment';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-featured-trips',
  templateUrl: './featured-trips.component.html',
  styleUrls: ['./featured-trips.component.scss'],
})
export class FeaturedTripsComponent implements OnInit {
  featuredEvents: any = [];
  $duration = 3;
  tab: any = 3;

  isLoggedIn: any;
  locations: any = [];
  userPlans: any = [];

  userId: any;
  index: Number;

  constructor(private readonly eventService: EventService) {
    // this.getHomeFeaturedEvents(3);
    this.isLoggedIn = localStorage.getItem('userId');
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.getWishlist();
      this.getUserPlan();
    }
    this.changeTab(3);
  }

  changeTab(index: any) {
    this.index = index;
    this.tab = index;
    this.$duration = index;
    let durationFrom = 1;
    switch (index) {
      case 3:
        durationFrom = 1;
        break;
      case 5:
        durationFrom = 3;
        break;
      case 10:
        durationFrom = 5;
        break;
      case 15:
        durationFrom = 10;
        break;
      default:
    }
    const params: any = {
      durationFrom: durationFrom,
      durationTo: index,
      pageSize: 0,
    };
    this.eventService.getEvents(params).then((events) => {
      this.featuredEvents =
        events.length > 4 ? events.slice(0, 4) : events;
        console.log(this.featuredEvents);
        
      this.featuredEvents = this.featuredEvents.filter((item: any) => {
        return (
          item.status == 'published'

          //   item.status == 'published' &&
          // (moment(moment(item.date).format('YYYY-MM-DD')).isAfter(
          //   moment(new Date()).format('YYYY-MM-DD')
          // ) ||
          //   moment(moment(item.date).format('YYYY-MM-DD')).isSame(
          //     moment(new Date()).format('YYYY-MM-DD')
          //   ))
        );
      });
      // console.log('eventsss: ', this.featuredEvents);
    });
  }

  // getHomeFeaturedEvents(durationTo: number) {
  //   this.$duration = durationTo;
  //   this.eventService.getHomeFeaturedEvents(durationTo).subscribe((events) => {
  //     this.featuredEvents = events.slice(0, 4);
  //     this.tab = durationTo;
  //     // console.log('events0', events);
  //   });
  // }

  getWishlist() {
    this.eventService.getUserWishList(this.userId).subscribe((data: any) => {
      if (data.data.trips.length) {
        data.data.trips?.forEach((item: any) => {
          this.locations.push(item._id);
        });
      } else {
        this.locations = [];
      }
    });
    // console.log('dataaaaaaaaa: ', this.locations);
  }

  addToWishlist(id: any) {
    this.eventService.addTripToWishlist(id).subscribe((data: any) => {
      this.getWishlist();
    });
  }

  removeFromWishlist(id: any) {
    this.eventService.removeTripFromWishlist(id).subscribe((data: any) => {
      this.locations.splice(this.locations.indexOf(id), 1);
    });
  }

  removeFromPlan(id: any) {
    this.eventService.removeTripFromPlan(id).subscribe((data: any) => {
      this.userPlans.splice(this.userPlans.indexOf(id), 1);
    });
  }

  addToPlan(id: any) {
    this.eventService.addTripToPlan(id).subscribe((data: any) => {
      this.getUserPlan();
    });
  }

  getUserPlan() {
    this.eventService.getUserPlan(this.userId).subscribe((data: any) => {
      if (data?.trips?.length) {
        data?.trips?.forEach((item: any) => {
          this.userPlans.push(item._id);
        });
      } else {
        this.userPlans = [];
      }
    });
  }

  isInPlan(id: any) {
    return this.userPlans.includes(id);
  }

  isInWishlist(id: any) {
    if (this.locations.length > 0) {
      var res = this.locations.includes(id);
      // console.log(res);
      return this.locations.includes(id);
    }
  }
}
