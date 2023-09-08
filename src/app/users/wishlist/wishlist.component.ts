import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import defaultImg from '../../../assets/images/images/spring1.png';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
// import { AuthModalComponent } from '../../common/auth-modal/auth-modal.component';
import { CreatePlanComponent } from '../../planning-popups/create-plan/create-plan.component';
import { PlanListingComponent } from '../../planning-popups/plan-listing/plan-listing.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  userId: string;
  locations: any;

  userPlans: any = [];

  location = {
    _id: '',
  };

  isAddtoPlanClicked: boolean = false;
  constructor(
    private readonly eventService: EventService,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist() {
    this.eventService.getUserWishList(this.userId).subscribe((data: any) => {
      data.data.trips.forEach((i: any) => {
        i['type'] = 'trip';
      });

      data.data.accommodations.forEach((i: any) => {
        i['type'] = 'accommodation';
      });

      //  data.data.categories.forEach((i: any) => {
      //   i['type'] = 'category'
      //  });

      data.data.events.forEach((i: any) => {
        i['type'] = 'event';
      });

      this.locations = data.data.locations.concat(
        data.data.accommodations,
        data.data.activities,
        data.data.categories,
        data.data.trips,
        data.data.events
      );
      // console.log('this.locations', data.data);
    });
  }

  removeWishlist(item: any) {
    if (item.type == 'location') {
      this.eventService.removeFromWishlist(item._id).subscribe((data: any) => {
        this.getWishlist();
      });
    } else if (item.type == 'trip') {
      this.eventService
        .removeTripFromWishlist(item._id)
        .subscribe((data: any) => {
          this.getWishlist();
        });
    } else if (item.type == 'event') {
      this.eventService
        .removeEventFromWishlist(item._id)
        .subscribe((data: any) => {
          this.getWishlist();
        });
    } else if (item.type == 'accommodation') {
      this.eventService
        .deleteAccommodationFromWishlist(item._id)
        .subscribe((data: any) => {
          this.getWishlist();
        });
    }
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  addToPlan(item: any) {
    this.location._id = item._id;
    this.isAddtoPlanClicked = true;
    this.userId = localStorage.getItem('userId');
    // console.log(this.ngxSmartModalService.getModalStack());
    // this.ngxSmartModalService.get('createPlanModal').close();
    // this.ngxSmartModalService.removeModal('createPlanModal');
    // if (!this.userId) {
    //   this.ngxSmartModalService.closeAll;
    //   const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {customClass: 'authModalClass'});
    //   modal.open();
    // } else {
    // debugger;
    this.fetchUserPlans();
    // }
  }

  fetchUserPlans() {
    this.eventService.getUserPlan(this.userId).subscribe((res: any) => {
      this.ngxSmartModalService.removeModal('planListingModal');
      if (res.length > 0) {
        this.ngxSmartModalService.closeAll;
        this.userPlans = res;
        this.userPlans['locations'] = [this.location._id];
        const modal = this.ngxSmartModalService
          .create('planListingModal', PlanListingComponent)
          .setData(this.userPlans);
        modal.open();
      } else {
        var data = { locations: [this.location._id] };
        const modal = this.ngxSmartModalService
          .create('createPlanModal', CreatePlanComponent)
          .setData(data);
        modal.open();
      }
    });
  }
}
