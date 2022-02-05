import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CredentialsService } from '@app/auth';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { EventService } from '../../services/event.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import * as $ from 'jquery';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthModalComponent } from '@app/common/auth-modal/auth-modal.component';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
// import { stat } from 'fs';

@Component({
  selector: 'app-accomodation-detail',
  templateUrl: './accomodation-detail.component.html',
  styleUrls: ['./accomodation-detail.component.scss'],
})
export class AccomodationDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  bookingForm!: FormGroup;
  center: google.maps.LatLngLiteral;
  userId: any;
  location: any;
  accommodationId: any;
  loc: any;
  redirectUrl: string;
  // data: any;
  accommodations: any = [];
  categories: any = [];
  activities: any = [];
  hotels: any = [];
  isLoggedIn: boolean;

  showImgs: boolean;
  localImageArray: any;

  accomodations: any;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
  };
  roomDetail: any;

  minDateForCheckIn: any;
  minDateForCheckOut: any;

  userData: any;

  mockRoomData: any;

  selectedRoom: any;

  isBookRoomClicked: boolean = false;
  isAddToWishlistClicked: boolean = false;

  constructor(
    private readonly eventService: EventService,
    private readonly route: ActivatedRoute,
    private credentialsService: CredentialsService,
    public ngxSmartModalService: NgxSmartModalService,
    public routeLocation: Location,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    //     this.roomDetail = this.route.snapshot.data.room;
    //     console.log('room detail: ', this.roomDetail, this.route.snapshot.data);
    // debugger;

    this.route.params.subscribe((data: any) => {
      window.scrollTo(0, 0);
      this.roomDetail = this.route.snapshot.data.room;
    });
    const queryString = Object.keys(this.params)
      .map((key) => `${key}=${this.params[key]}`)
      .join('&');

    this.getAccomodationsListing(queryString);

    this.loc = this.routeLocation.path();

    this.redirectUrl = this.generateSocialMediaUrls();

    this.isLoggedIn = this.credentialsService.isAuthenticated();
    // if (this.route.snapshot.data.location) {
    //   this.location = this.route.snapshot.data.roomDetail;
    // } else {
    //   this.location = this.route.snapshot.data.roomDetail;
    // }
    this.location = this.roomDetail;
    this.accommodationId = this.roomDetail._id;
    this.userId = localStorage.getItem('userId');

    this.userData = JSON.parse(localStorage.getItem('userData'));

    // console.log(this.userData);

    this.minDateForCheckIn = moment(new Date()).format('YYYY-MM-DD');
    this.minDateForCheckOut = moment(new Date()).format('YYYY-MM-DD');
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
        this.openBookingForm(this.selectedRoom);
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

    this.bookingForm.valueChanges.subscribe((value: any) => {
      this.minDateForCheckOut = moment(value.checkIn).format('YYYY-MM-DD');
    });
  }

  get params() {
    return {
      // isFeatured: true,
      categoryId: `"${this.roomDetail.category}"`,
    };
  }

  getAccomodationsListing(params: string) {
    this.eventService.getAllPTDCAccomodations(params).subscribe((listing) => {
      // this.hotels = listing.data;
      this.hotels = listing.data.filter((item: any) => {
        return item._id !== this.roomDetail._id;
      });
      // console.log(this.hotels);
    });
  }

  private generateSocialMediaUrls(): string {
    return `${environment.portalUrl}/${this.routeLocation.path()}`;
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  showCarousel = (index: any) => {
    this.showImgs = true;

    this.localImageArray = this.roomDetail?.photos?.map((val: any) => {
      return val;
    });

    const tempFirstImg = this.localImageArray[0];
    this.localImageArray[0] = this.localImageArray[index];
    this.localImageArray[index] = tempFirstImg;
    this.ngxSmartModalService.getModal('carouselModal').open();
  };

  hideCarousel() {
    this.showImgs = false;
  }

  createBookingForm() {
    this.bookingForm = this.formBuilder.group({
      name: [this.userData?.profile?.firstName, Validators.required],
      email: [this.userData?.profile.email, Validators.required],
      phone: [this.userData?.profile?.mobile, Validators.required],
      cnic: [this.userData?.profile?.nic, Validators.required],
      checkIn: [new Date(), Validators.required],
      checkOut: ['', Validators.required],
      noOfRooms: [1, Validators.required],
      hotelRefId: [this.roomDetail._id],
      hotelName: [this.roomDetail.hotelName],
      roomId: ['', Validators.required],
    });
  }

  openBookingForm(selectedRoom: any) {
    this.isBookRoomClicked = true;
    this.isAddToWishlistClicked = false;
    this.bookingForm.get('noOfRooms').patchValue(1);
    this.minDateForCheckIn = moment(new Date()).format('YYYY-MM-DD');
    this.minDateForCheckOut = moment(new Date()).format('YYYY-MM-DD');
    // console.log(selectedRoom);
    this.selectedRoom = selectedRoom;
    if (!this.isLoggedIn) {
      const modal = this.ngxSmartModalService.create('authModal', AuthModalComponent, {
        customClass: 'authModalClass',
      });
      modal.open();
    } else {
      this.ngxSmartModalService.open('bookingModal');
    }
  }

  createBooking() {
    this.bookingForm.get('roomId').patchValue(this.selectedRoom._id);
    this.eventService.createBooking(this.bookingForm.value).subscribe(
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

  ngAfterViewInit(): void {
    //   $('#stars li')
    //     .on('mouseover', function () {
    //       var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
    //       // Now highlight all the stars that's not after the current hovered star
    //       $(this)
    //         .parent()
    //         .children('li.star')
    //         .each(function (e) {
    //           if (e < onStar) {
    //             $(this).addClass('hover');
    //           } else {
    //             $(this).removeClass('hover');
    //           }
    //         });
    //     })
    //     .on('mouseout', function () {
    //       $(this)
    //         .parent()
    //         .children('li.star')
    //         .each(function (e) {
    //           $(this).removeClass('hover');
    //         });
    //     });
    //   /* 2. Action to perform on click */
    //   $('#stars li').on('click', function () {
    //     var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    //     var stars = $(this).parent().children('li.star');
    //     for (var i = 0; i < stars.length; i++) {
    //       $(stars[i]).removeClass('selected');
    //     }
    //     for (var i = 0; i < onStar; i++) {
    //       $(stars[i]).addClass('selected');
    //     }
    //     // JUST RESPONSE (Not needed)
    //     var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    //     var msg = '';
    //     if (ratingValue > 1) {
    //       msg = 'Thanks! You rated this ' + ratingValue + ' stars.';
    //     } else {
    //       msg = 'We will improve ourselves. You rated this ' + ratingValue + ' stars.';
    //     }
    //     // responseMessage(msg);
    //   });
  }

  // giveFeedback() {
  //   this.ngxSmartModalService.getModal('feedbackModal').open();

  //   setTimeout(() => {
  //     this.ngxSmartModalService.getModal('feedbackModal').close();
  //   }, 2000);
  // }

  getWishlist() {
    this.eventService.getUserWishList(this.userId).subscribe((data: any) => {
      if (data.data.accommodations.length) {
        data.data.accommodations?.forEach((item: any) => {
          this.accommodations.push(item._id);
        });
      } else {
        this.accommodations = [];
      }
    });
    this.isInWishlist();
  }

  removeFromWishlist() {
    this.eventService.deleteAccommodationFromWishlist(this.accommodationId).subscribe((data: any) => {
      this.accommodations.splice(this.accommodations.indexOf(this.accommodationId), 1);
    });
  }

  addToWishlist() {
    // this.eventService.addAccommodationToWishlist(this.accommodationId).subscribe((data: any) => {
    //   this.getWishlist();
    // });
    this.isAddToWishlistClicked = true;
    this.isBookRoomClicked = false;
    if (this.userId || this.isLoggedIn) {
      this.eventService.addAccommodationToWishlist(this.accommodationId).subscribe((data: any) => {
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
    return this.accommodations.includes(this.accommodationId);
  }

  changeTab(no: number) {}

  fillMockRoomData() {
    this.mockRoomData = {
      _id: '6091869565003ae9fcbd6f88',
      hotelAmenities: ['Newspaper', 'Room Service', 'Cleaning Services', 'Security', 'WiFi', '24 Hour Reception'],
      photos: ['https://production9240.blob.core.windows.net/ptdc-photos/6f3a5357-366c-4b7a-b952-2b4eefbee3ce'],
      isFeatured: false,
      totalRating: 2,
      averageRating: 0,
      totalReviews: 0,
      rate: 5400,
      isActive: false,
      hotelName: 'Park Lane Hotel',
      addressInfo: '73-C',
      city: 'Karachi',
      overview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      email: 'developers@findmyadventure.pk',
      mobile: '0332-2228829',
      zipcode: 79590,
      location: '5f6126b58bccb721a5c8525b',
      category: '5f66b9b8e008c9f9b58dacd8',
      hotelSource: 'agoda',
      checkin: '12:00 PM',
      checkout: '12:00 PM',
      cancellationPolicyType:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      vendor: '5f66b9b8e008c9f9b58dacd8',
      updatedAt: '2021-05-04T16:58:48.266Z',
      createdAt: '2021-02-14T18:06:34.878Z',
      rooms: [
        {
          RoomName: 'RoomName12',
          HotelSource: 'HotelSource1',
          RoomDescription: 'RoomDescription1',
          RoomSize: 'RoomSize1',
          BedSize: 'BedSize1',
          NoOfRoomsAvailable: '2',
          MaxPerson: '11',
          RoomFacilityName: ['asaf1', 'fafa1', 'gagag1'],
          roomImages: [],
          Rate: '12221',
          discountedRate: '1221',
          RefundStatus: '11',
          taxApplicable: true,
          taxPercentage: '0',
          photoIds: ['6f3a5357-366c-4b7a-b952-2b4eefbee3ce'],
          _id: '6090a52bddc48089bd03b5b9',
        },
        {
          RoomName: 'RoomName1',
          HotelSource: 'HotelSource1',
          RoomDescription: 'RoomDescription1',
          RoomSize: 'RoomSize1',
          BedSize: 'BedSize1',
          NoOfRoomsAvailable: '4',
          MaxPerson: '2',
          RoomFacilityName: ['asaf', 'fafa', 'gagag'],
          roomImages: [],
          Rate: '100',
          discountedRate: '100',
          RefundStatus: '1',
          taxApplicable: false,
          taxPercentage: '10',
          photoIds: ['24a688f6-d02d-4554-b5c1-2c47391dd33e'],
          _id: '60917d48a3839b7150202215',
        },
      ],
      __v: 13,
      thumbnails: ['https://production9240.blob.core.windows.net/ptdc-thumbnails/6f3a5357-366c-4b7a-b952-2b4eefbee3ce'],
    };
    // console.log(this.mockRoomData);
  }
}
