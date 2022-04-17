import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EventService } from '../../services/event.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { AuthModalComponent } from '../../common/auth-modal/auth-modal.component';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import defaultImage from '../../../assets/images/home/cities.png';

const responsiveSettings = [
  {
    breakpoint: 1920,
    settings: {
      slidesToShow: 4,
      infinite: true,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3.0,
      infinite: true,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2.0,
      infinite: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1.5,
      infinite: true,
    },
  },
];

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slideConfig = {
    slidesToShow: 4.0,
    slidesToScroll: 4,
    arrows: true,
    responsive: responsiveSettings,
  };

  event: any;
  userId: any;
  eventId: any;
  isLoggedIn: any;

  center: google.maps.LatLngLiteral;

  locations: any = [];
  userPlans: any = [];
  surroundings: any = [];

  relatedEvents: any = [];

  userData: any = [];

  show: boolean;
  surroundingMakers: any = [];
  selectedSur: any;

  infoWondowData = {
    photo: '',
    alias: '',
    province: '',
    redirectLink: '',
  };

  bookingForm!: FormGroup;

  isBookRoomClicked: boolean = false;
  isAddToWishlistClicked: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    public ngxSmartModalService: NgxSmartModalService,
    private credentialsService: CredentialsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe((res: any) => {
      this.event = this.route.snapshot.data.event;
      this.surroundings = this.event.surroundings;
      this.eventId = this.event._id;
      this.userId = localStorage.getItem('userId');
      this.isLoggedIn = localStorage.getItem('userId');
      this.getLocations();

      this.center = {
        lat: this.event?.location?.coordinates[1],
        lng: this.event?.location?.coordinates[0],
      };

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      //  console.log(res);
      //  console.log(this.surroundings);
      //  debugger;
    });
  }

  ngOnInit(): void {
    // this.fillMockRoomData();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // resolve single accomodation and print images list with title..
    if (this.isLoggedIn) {
      // this.getWishlist();
    }
    this.createBookingForm();

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
      if (data.data.events.length) {
        data.data.events?.forEach((item: any) => {
          this.locations.push(item._id);
        });
      } else {
        this.locations = [];
      }
    });
    this.isInWishlist();
  }

  removeFromWishlist() {
    this.eventService.removeEventFromWishlist(this.eventId).subscribe((data: any) => {
      this.locations.splice(this.locations.indexOf(this.eventId), 1);
    });
  }

  removeFromPlan() {
    this.eventService.removeEventFromPlan(this.eventId).subscribe((data: any) => {
      this.userPlans.splice(this.userPlans.indexOf(this.eventId), 1);
    });
  }

  addToWishlist() {
    this.isAddToWishlistClicked = true;
    if (this.userId) {
      this.eventService.addEventToWishlist(this.eventId).subscribe((data: any) => {
        this.getWishlist();
      });
    } else {
      const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {
        customClass: 'authModalClass',
      });
      modal.open();
    }
  }

  addToPlan() {
    if (this.userId) {
      this.eventService.addEventToPlan(this.eventId).subscribe((data: any) => {
        this.getUserPlan();
      });
    } else {
      const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {
        customClass: 'authModalClass',
      });
      modal.open();
    }
  }

  getUserPlan() {
    this.eventService.getUserPlan(this.userId).subscribe((data: any) => {
      // debugger;
      if (data?.events.length) {
        data.events?.forEach((item: any) => {
          this.userPlans.push(item._id);
        });
      } else {
        this.userPlans = [];
      }
    });
    this.isInPlan();
  }

  isInPlan() {
    return this.userPlans.includes(this.eventId);
  }

  isInWishlist() {
    if (this.locations) {
      // console.log(this.locations.includes(this.eventId));
      // debugger;
      return this.locations.includes(this.eventId);
    }
  }

  navigateOnClick(surrounding: any) {
    // debugger
    this.selectedSur = surrounding.name;
    // this.center = {
    //   lat: this.location?.location.coordinates[0],
    //   lng: this.location?.location.coordinates[1],
    // };
    this.eventService.getSurroundings(this.event?.location.coordinates, surrounding.typeKey).subscribe((data: any) => {
      this.surroundingMakers = data.data;
      this.show = true;
      // console.log(this.surroundingMakers);
      // debugger;
    });

    // let url = `/map/cities/${surrounding.name}`;

    // this.location.go(url);
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  getLocations() {
    // debugger;
    this.eventService.getRelatedEvents(this.event?.cityId).subscribe((locations) => {
      this.relatedEvents = locations;
      // debugger;
      this.relatedEvents = this.relatedEvents.filter((item: any) => {
        return item.status == 'published' && item._id !== this.eventId;
      });
      this.relatedEvents.filter((event: any) => {
        if (!event.thumbnail) {
          event.thumbnail = defaultImage;
        }
      });
    });
  }

  createBookingForm() {
    this.bookingForm = this.formBuilder.group({
      fullName: [this.userData?.profile?.firstName, Validators.required],
      email: [this.userData?.profile?.email, Validators.required],
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
    // console.log(passengersDetail);
    //  debugger;
    this.eventService.createEventBooking(this.eventId, passengersDetail).subscribe(
      (res: any) => {
        // console.log(res);
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

  getHref = (item: any) => {
    return `https://www.google.com/maps/place/?q=place_id:${item.place_id}`;
  };

  openContactNumberModal() {
    this.ngxSmartModalService.open('contactModal');
  }
}
