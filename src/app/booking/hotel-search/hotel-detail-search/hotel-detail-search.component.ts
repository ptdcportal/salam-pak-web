import { Component, OnInit, ViewChild } from '@angular/core';
import { Shell } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel-detail-search',
  templateUrl: './hotel-detail-search.component.html',
  styleUrls: ['./hotel-detail-search.component.scss'],
})
export class HotelDetailSearchComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  hotelForm: FormGroup;
  filter: any;
  media: any;
  hotelId: any;
  slideConfig = {
    slidesToShow: 3.0,
    slidesToScroll: 3.0,
    infinite: false,
    nextArrow:
      "<img class='next-slidee' src='assets/images/icons/right-arrow-white.svg' style='width: 40px;height: 40px;z-index:1000; opacity:1; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 37%;right: -7px;font-size: 20px !important; padding:10px; '/>",
    // style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -30px;font-size: 20px !important; padding:10px '
    prevArrow:
      "<img class='prev-slidee' src='assets/images/icons/left-arrow-white.svg' style='width: 40px;height: 40px;z-index:1000; opacity:1; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:38%; font-size: 20px !important; left:-20px ; padding:10px; '/>",
    // style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font-size: 20px !important; left:-45px ; padding:10px '
    // "<div class='nav-btn prev-slide icon-arrow-left'></div>",
    // nextArrow:
    //   "<div class='nav-btn next-slide icon-arrow-right'  style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -30px;font- size: 20px !important; padding:10px '></div>",
    // prevArrow:
    //   "<div class='nav-btn prev-slide icon-arrow-left' style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font- size: 20px !important; left:-45px ; padding:10px '></div>",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  userData: any;
  hotelItem: any = {
    roomType: '',
    currency: '',
    price: '',
    checkIn: '',
    checkOut: '',
    accomodationId: '',
    roomId: '',
    noOfRooms: 0,
    hotelName: '',
  };
  hotelDetail: any;
  hotelMedia: any;
  noOfRooms: any;
  selectedOption: any = 1;
  bookingResponse: any = null;
  data = {
    refId: '',
    hotelRefId: '',
    hotelSource: '',
    hotelId: '',
    checkin_date: '',
    checkout_date: '',
    no_of_adults: 0,
    no_of_children: 0,
    rooms: 0,
  };
  tab: number = 1;
  multiTab: number = 0;

  user: any;
  formFlag = true;
  paymentFlag = false;
  paymentSuccesFlag = false;
  bookingId: any = null;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private readonly shellService: Shell,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public ngxSmartModalService: NgxSmartModalService,
    private domSanitizer: DomSanitizer
  ) {
    let hotelSource = this.route.snapshot.queryParams.hotelSource.toLowerCase();
    this.data = {
      refId: this.route.snapshot.queryParams.refId,
      hotelRefId: this.route.snapshot.queryParams.hotelRefId,
      hotelSource: hotelSource === 'local' ? 'local' : 'bookme',
      hotelId: this.route.snapshot.queryParams.hotelId,
      checkin_date: this.route.snapshot.queryParams.checkIn,
      checkout_date: this.route.snapshot.queryParams.checkOut,
      no_of_adults: this.route.snapshot.queryParams.adults,
      no_of_children: this.route.snapshot.queryParams.children,
      rooms: this.route.snapshot.queryParams.room,
    };

    if (this.data.hotelId || this.data.hotelRefId) {
      this.eventService.gethotelDetail(this.data).subscribe((data: any) => {
        console.log(data);
        this.hotelDetail = data.data && data.data.hotelDetails;
        this.hotelMedia = data.data && data.data.media;
        this.loadScript();
      });
    }
  }

  public getNoOfRooms(rooms: any) {
    return Array(parseInt(rooms));
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
    this.shellService.currentMessage.subscribe((filters) => {
      this.filter = filters;
    });
    this.createForm();
  }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('hotelModalPopup').onDismiss.subscribe((modal: NgxSmartModalComponent) => {
      this.selectedOption = 1;
    });
  }

  private createForm() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.hotelForm = this.formBuilder.group({
      name: '',
      phoneNo: '',
      email: '',
      cnic: '',
    });
    this.hotelForm.patchValue({
      name:
        this.userData &&
        this.userData.profile &&
        this.userData.profile.firstName + ' ' + this.userData.profile.lastName,
      phoneNo: this.userData && this.userData.profile && this.userData.profile.mobile,
      email: this.userData && this.userData.profile && this.userData.profile.email,
      cnic: this.userData && this.userData.profile && this.userData.profile.nic,
    });
  }

  openHotelModal(roomId: any, hotelId: any, roomType: any, ratePlanInfo: any, hotelName: any, arrayIndex: any) {
    let ind = arrayIndex * 10 + (this.multiTab + 1);
    const e = document.getElementById('select' + ind);
    // var selectValiue = e.value;
    // console.log(selectValiue);
    var value = 1; //document.getElementById('select' + ind). value;
    this.user = null;
    this.formFlag = true;
    this.paymentFlag = false;
    this.paymentSuccesFlag = false;
    this.bookingId = null;
    this.bookingResponse = null;
    this.hotelItem = {
      roomType: roomType,
      currency: ratePlanInfo && ratePlanInfo.ratePriceInfo.currency,
      price: ratePlanInfo && ratePlanInfo.ratePriceInfo.totalPriceWithTax,
      checkIn: this.data.checkin_date + '',
      checkOut: this.data.checkout_date + '',
      accomodationId: hotelId,
      roomId: roomId,
      noOfRooms: this.selectedOption,
      hotelName: hotelName,
    };
    this.ngxSmartModalService.getModal('hotelModalPopup').open();
  }

  showTabContent = (tab: any, index: any, tabIndex: any) => {
    this.multiTab = tabIndex;
    var elems = document.getElementsByClassName('packageDetail' + index);
    for (var i = 0; i < elems.length; i++) {
      elems[i].classList.remove('active');
      elems[i].classList.add('hidden');
    }

    var element = document.getElementById('tab' + tab);
    element && element.classList.remove('hidden');
    element && element.classList.add('active');

    var tabElems = document.getElementsByClassName('packageTab' + index);
    for (var i = 0; i < tabElems.length; i++) {
      tabElems[i].classList.remove('active');
    }
    var element = document.getElementById('tab' + tab + '-tab');
    element && element.classList.add('active');
  };

  selectedOptions = (value: any) => {
    this.selectedOption = value;
  };

  hotelBookingData = {
    name: '',
    phone: '',
    email: '',
    cnic: '',
    checkIn: '',
    checkOut: '',
    hotelRefId: '',
    hotelName: '',
    roomId: '',
    noOfRooms: 1,
  };

  setHotelBookingData(data: any, userInfo: any) {
    this.hotelBookingData.name = userInfo.name + '';
    this.hotelBookingData.email = userInfo.email + '';
    this.hotelBookingData.phone = userInfo.phoneNo + '';
    this.hotelBookingData.cnic = userInfo.cnic + '';
    this.hotelBookingData.checkIn = data.checkIn + '';
    this.hotelBookingData.checkOut = data.checkOut + '';
    this.hotelBookingData.hotelRefId = data.accomodationId + '';
    this.hotelBookingData.roomId = data.roomId + '';
    this.hotelBookingData.noOfRooms = parseInt(data.noOfRooms) | 1;
    this.hotelBookingData.hotelName = data.hotelName;
  }

  bookHotel(data: any) {
    let userInfo = this.hotelForm.value;
    if (userInfo && !userInfo.name) {
      this.toastr.error('Name is must');
    } else if (userInfo && !userInfo.phoneNo) {
      this.toastr.error('Phone is must');
    } else if (userInfo && !userInfo.email) {
      this.toastr.error('Email is must');
    } else if (userInfo && !userInfo.cnic) {
      this.toastr.error('cnic or passport information is must');
    } else {
      this.setHotelBookingData(data, userInfo);
      this.eventService.bookHotel(this.hotelBookingData).subscribe(
        (res: any) => {
          this.toastr.success('Your booking request has been received! you will be notify via email');
          this.formFlag = false;
          this.user = userInfo;
          this.paymentFlag = true;
          this.bookingId = res.data;
          //this.ngxSmartModalService.getModal('hotelModalPopup').close();
        },
        (err) => {
          this.toastr.error('error while making booking request');
        }
      );
    }
  }

  bankURL(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onPaymentMethodSuccess(data: any) {
    this.paymentFlag = false;
    this.paymentSuccesFlag = true;
    console.log(data);
    this.bookingResponse = data;
  }

  changeTab(no: number) {}

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
