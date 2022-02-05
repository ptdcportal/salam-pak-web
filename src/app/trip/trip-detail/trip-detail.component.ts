import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { CredentialsService } from '@app/auth';
import { EventService } from '../../services/event.service';
import { ToastrService } from 'ngx-toastr';
import { AuthModalComponent } from '../../common/auth-modal/auth-modal.component';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  trip: any;
  userId: any;
  tripId: any;
  isLoggedIn: any;

  locations: any = [];
  userPlans: any = [];

  redirectUrl: string;

  bookingForm!: FormGroup;

  userData: any;

  isBookRoomClicked: boolean = false;
  isAddToWishlistClicked: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private credentialsService: CredentialsService,
    public ngxSmartModalService: NgxSmartModalService,
    public routeLocation: Location,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.trip = this.route.snapshot.data.trip;
    this.userId = localStorage.getItem('userId');
    this.isLoggedIn = localStorage.getItem('userId');
    this.tripId = this.trip._id;

    this.redirectUrl = this.generateSocialMediaUrls();
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // if (this.isLoggedIn) {
    //   this.getWishlist();
    //   this.getUserPlan();
    //   // this.createFeedbackForm();
    // }

    this.isLoggedIn = localStorage.getItem('userId');
    this.credentialsService.currentStatus.subscribe((status: any) => {
      // debugger;
      if (status == 'loggedIn' && !this.isBookRoomClicked && !this.isAddToWishlistClicked) {
        this.getWishlist();
      } else if (this.isBookRoomClicked && status == 'loggedIn') {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.isLoggedIn = true;
        this.userId = localStorage.getItem('userId');
        this.createBookingForm();
        // this.getWishlist();
        this.openBookingForm();
        //  debugger;
      } else if (this.isAddToWishlistClicked && status == 'loggedIn') {
        // debugger;
        this.userId = localStorage.getItem('userId');
        this.isLoggedIn = true;
        this.addToWishlist();
      } else {
        this.isLoggedIn = false;
      }
    });
    this.createBookingForm();
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

  getWishlist() {
    this.eventService.getUserWishList(this.userId).subscribe((data: any) => {
      // debugger;
      if (data.data.trips.length) {
        data.data.trips?.forEach((item: any) => {
          this.locations.push(item._id);
        });
        this.isInWishlist();
      } else {
        this.locations = [];
      }
    });
  }

  removeFromWishlist() {
    this.eventService.removeTripFromWishlist(this.tripId).subscribe((data: any) => {
      this.locations.splice(this.locations.indexOf(this.tripId), 1);
    });
  }

  removeFromPlan() {
    this.eventService.removeTripFromPlan(this.tripId).subscribe((data: any) => {
      this.userPlans.splice(this.userPlans.indexOf(this.tripId), 1);
    });
  }

  addToWishlist() {
    this.isAddToWishlistClicked = true;
    if (this.userId) {
      this.eventService.addTripToWishlist(this.tripId).subscribe((data: any) => {
        this.getWishlist();
      });
    } else {
      const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {
        customClass: 'authModalClass',
      });
      modal.open();
    }
  }

  isInWishlist() {
    if (this.locations) {
      // console.log(this.locations.includes(this.eventId));
      // debugger;
      return this.locations.includes(this.tripId);
    }
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  private generateSocialMediaUrls(): string {
    return `${environment.portalUrl}/${this.routeLocation.path()}`;
  }

  createBookingForm() {
    this.bookingForm = this.formBuilder.group({
      fullName: [this.userData?.profile?.firstName, Validators.required],
      email: [this.userData?.profile.email, Validators.required],
      mobile: [this.userData?.profile?.mobile, Validators.required],
      idCard: [this.userData?.profile?.nic, Validators.required],
      noOfAdults: [1, Validators.required],
      noOfChildren: [0, Validators.required],
    });
  }

  openBookingForm() {
    this.isBookRoomClicked = true;
    if (!this.isLoggedIn) {
      const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {
        customClass: 'authModalClass',
      });
      modal.open();
    } else {
      this.userData = JSON.parse(localStorage.getItem('userData'));
      this.createBookingForm();
      // debugger;
      this.ngxSmartModalService.open('bookingModal');
    }
  }

  createBooking() {
    let passengersDetail = {
      ...this.bookingForm.value,
      isChild: this.bookingForm.get('noOfChildren').value > 0 ? true : false,
    };
    passengersDetail = { passengersDetail };
    console.log(passengersDetail);
    this.eventService.createTripBooking(this.tripId, passengersDetail).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxSmartModalService.getModal('bookingModal').close();
        this.toastr.success('booking created successfully!');
      },
      (err) => {
        this.ngxSmartModalService.getModal('bookingModal').close();
        this.toastr.error(err.error.error.message);
        // console.log(err);
        // debugger;
      }
    );
  }

  // addToPlan() {
  //   if (this.userId) {
  //     this.eventService.addTripToPlan(this.tripId).subscribe((data: any) => {
  //       this.getUserPlan();
  //     });
  //   } else {
  //     const modal = this.ngxSmartModalService.create('loginModal', AuthModalComponent);
  //     modal.open();
  //   }
  // }

  // getUserPlan() {
  //   this.eventService.getUserPlan(this.userId).subscribe((data: any) => {
  //     // debugger;
  //     if (data?.trips.length) {
  //       data.trips?.forEach((item: any) => {
  //         this.userPlans.push(item._id);
  //       });
  //     } else {
  //       this.userPlans = [];
  //     }
  //   });
  //   this.isInPlan();
  // }

  // isInPlan() {
  //   return this.userPlans.includes(this.tripId);
  // }
}
