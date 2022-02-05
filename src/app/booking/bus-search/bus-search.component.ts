import { Component, OnInit, ViewChild } from '@angular/core';
import { Shell } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

let states: any = [];
@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.scss'],
})
export class BusSearchComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  isLoading: any = true;
  bookingBusForm!: FormGroup;
  busForm!: FormGroup;
  filter: any;
  p: number = 1;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrows: true,
  };
  featuredEvents: any = [];
  allEvents: any = [];
  pageSize = 10;
  skip = 0;
  total = 0;
  tab = 1;
  star_rating = 4;
  locData: any = [];
  selectedLoc: any;
  userId: any;
  isLoggedIn: any;
  eventId: any;
  ammount: any;
  currencyData: any;
  currencies: any;
  currencySymbol: any;
  convertedPriceToPKR: string;
  bookingInfo: any;
  data = {
    cabin: 'Economy',
    origin_city_name: '',
    destination_city_name: '',
    date: '',
  };
  count: any = 0;
  totalAmount: any = 0;
  ticketPrice: any = 300;
  bustype: any = 4;
  busItem: any;
  totalSeats: any;
  selectedSeats: any = [];
  selectedMaleSeats: any = [];
  selectedFemaleSeats: any = [];
  maleOccoupiedSeats: any = [];
  femaleOccoupiedSeats: any = [];
  userData: any;
  currentDate = moment(new Date()).format('YYYY-MM-DD');

  user: any;
  formFlag = true;
  paymentFlag = false;
  paymentSuccesFlag = false;
  bookingResponse: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private credentialsService: CredentialsService,
    private readonly shellService: Shell,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    public ngxSmartModalService: NgxSmartModalService,
    private toastr: ToastrService,
    private domSanitizer: DomSanitizer
  ) {
    this.userId = localStorage.getItem('userId');
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.isLoggedIn = this.credentialsService.isAuthenticated();

    this.getCities();
    this.data = {
      cabin: this.route.snapshot.queryParams.cabin,
      origin_city_name: this.route.snapshot.queryParams.busFrom,
      destination_city_name: this.route.snapshot.queryParams.busTo,
      date: this.route.snapshot.queryParams.checkOut,
    };
    if (this.data) {
      this.getBus(this.data, this.pageSize, this.skip, '-price');
    }
    this.createForm();
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadwhatScript();
    this.shellService.currentMessage.subscribe((filters) => {
      this.filter = filters;
    });
    this.getCurrencyInfo();
    this.formFlag = true;
    this.paymentFlag = false;
    this.paymentSuccesFlag = false;
  }

  getBus(data: any, pageSize = 0, skip = 0, filter: any) {
    this.isLoading = true;
    this.eventService.getbuss(data, pageSize, skip, filter).subscribe((data: any) => {
      this.isLoading = false;
      this.allEvents = data.data && data.data;
      this.pageSize = data.meta && data.meta.pageSize;
      this.skip = data.meta && data.meta.skip;
      this.total = data.meta && data.meta.total;
    });
  }

  public loadwhatScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/where-to-go.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  private createForm() {
    this.bookingBusForm = this.formBuilder.group({
      cabin: 'Economy',
      origin_city_name: '',
      destination_city_name: '',
      date: '',
    });
    this.busForm = this.formBuilder.group({
      name: '',
      phoneNo: '',
      email: '',
      cnic: '',
    });
    this.bookingBusForm.patchValue({
      cabin: this.data.cabin,
      origin_city_name: this.data.origin_city_name,
      destination_city_name: this.data.destination_city_name,
      date: this.data.date,
    });
    this.busForm.patchValue({
      name:
        this.userData &&
        this.userData.profile &&
        this.userData.profile.firstName + ' ' + this.userData.profile.lastName,
      phoneNo: this.userData && this.userData.profile && this.userData.profile.mobile,
      email: this.userData && this.userData.profile && this.userData.profile.email,
      cnic: this.userData && this.userData.profile && this.userData.profile.nic,
    });
  }

  getCities() {
    this.homeService.getCities().subscribe((data: any) => {
      this.locData = data;
      if (data) {
        data.forEach((i: any) => {
          states.push(i.name);
        });
      }
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    );

  searchLocation() {
    if (this.bookingBusForm.valid) {
      this.data = this.bookingBusForm.value;
      this.getBus(this.data, this.pageSize, 0, '-price');
    }
  }

  getCurrencyInfo() {
    this.shellService.getCurrenciesInfo().subscribe((res) => {
      this.currencyData = res; //(1,4) ...slice(1, 10)
      // console.log('currenccyyyy', res);
      this.currencies = res.slice(1, 10);
    });
  }

  hotelFilterTab(tabsort: string, tabValue: number) {
    this.tab = tabValue;
    this.getBus(this.data, this.pageSize, this.skip, tabsort);
  }

  nextPage() {
    this.getBus(this.data, this.pageSize, this.skip, '-price');
  }

  checkMaleOccupied(seatnumber: any) {
    const exists = this.maleOccoupiedSeats && this.maleOccoupiedSeats.includes(seatnumber + '');
    return exists ? true : false;
  }

  checkFemaleOccupied(seatnumber: any) {
    console.log(seatnumber, this.femaleOccoupiedSeats, this.femaleOccoupiedSeats.includes(seatnumber + ''));
    const exists = this.femaleOccoupiedSeats && this.femaleOccoupiedSeats.includes(seatnumber + '');
    return exists ? true : false;
  }

  openBusModal(event: any) {
    this.user = null;
    this.formFlag = true;
    this.paymentFlag = false;
    this.paymentSuccesFlag = false;
    this.bookingId = null;
    this.bookingResponse = null;
    this.eventService.getBusSeatInfo(event).subscribe((data: any) => {
      this.bookingInfo = data.data;
      let maleseats = data.data && data.data.occupied_seats_male;
      this.maleOccoupiedSeats = maleseats.split(',');
      let femaleseats = data.data && data.data.occupied_seats_female;
      this.femaleOccoupiedSeats = femaleseats.split(',');
    });
    this.ngxSmartModalService.getModal('busModalPopup').open();
    this.clearSeatChange();
    this.busItem = event;
    this.ticketPrice = this.busItem.discountedFare;
    this.bustype = parseInt(this.busItem.totalSeats) > 35 ? 4 : 3;
    let seatLength = parseInt(this.busItem.totalSeats) / this.bustype;
    this.totalSeats = new Array(parseInt(seatLength + ''));
  }

  seatChange(event: any, seatNumber: any) {
    console.log(event, seatNumber);
    if (
      event.target.classList.contains('seat') &&
      this.selectedSeats.length < 5 &&
      !event.target.classList.contains('occupied')
    ) {
      if (!event.target.classList.contains('selected')) {
        event.target.classList.toggle('selected');
        if (
          event.target.classList.contains('occupied-female') ||
          event.target.classList.contains('occupied-female-seat')
        ) {
          event.target.classList.toggle('occupied-female');
          event.target.classList.toggle('occupied-female-seat');
          event.target.classList.toggle('selected');
        }
        this.selectedSeats.length < 5 && this.updateSelectedCount(seatNumber);
      } else {
        event.target.classList.toggle('selected');
        event.target.classList.toggle('occupied-female');
        event.target.classList.toggle('occupied-female-seat');
      }
    } else {
      if (
        !event.target.classList.contains('occupied') &&
        (event.target.classList.contains('occupied-female') || event.target.classList.contains('occupied-female-seat'))
      ) {
        this.updateSelectedCount(seatNumber);
        event.target.classList.toggle('occupied-female');
        event.target.classList.toggle('occupied-female-seat');
      }

      if (!event.target.classList.contains('occupied') && event.target.classList.contains('selected')) {
        event.target.classList.toggle('selected');
        event.target.classList.toggle('occupied-female');
        event.target.classList.toggle('occupied-female-seat');
      }
    }

    if (this.selectedSeats.length < 7) {
      if (
        event.target.classList.contains('occupied-female') ||
        event.target.classList.contains('occupied-female-seat')
      ) {
        this.selectedSeats.length < 7 && this.updateSeatType(seatNumber, 'f');
        if (this.selectedMaleSeats.includes(seatNumber)) {
          this.updateSeatType(seatNumber, 'm');
        }
      } else if (event.target.classList.contains('selected')) {
        this.selectedSeats.length < 7 && this.updateSeatType(seatNumber, 'm');
        if (this.selectedFemaleSeats.includes(seatNumber)) {
          this.updateSeatType(seatNumber, 'f');
        }
      } else {
        if (this.selectedFemaleSeats.includes(seatNumber)) {
          this.updateSeatType(seatNumber, 'f');
        }
        if (this.selectedMaleSeats.includes(seatNumber)) {
          this.updateSeatType(seatNumber, 'm');
        }
      }
    }
  }

  clearSeatChange() {
    let selectedSeatsDiv = document.querySelectorAll('.row .seat.bus.selected, .row .seat.bus.occupied-female');
    for (var i = 0; i < selectedSeatsDiv.length; i++) {
      selectedSeatsDiv[i].classList.remove('selected');
      selectedSeatsDiv[i].classList.remove('occupied');
      selectedSeatsDiv[i].classList.remove('occupied-female');
      selectedSeatsDiv[i].classList.remove('occupied-female-seat');
    }
    this.selectedSeats = [];
    this.selectedMaleSeats = [];
    this.selectedFemaleSeats = [];
    this.totalSeats = 0;
    this.ticketPrice = 0;
    this.totalAmount = 0;
  }

  updateSelectedCount(seatNumber: any) {
    let selectedSeatsDiv = document.querySelectorAll('.row .seat.bus.selected, .row .seat.bus.occupied-female-seat');
    this.count = selectedSeatsDiv.length;
    this.totalAmount = selectedSeatsDiv.length * this.ticketPrice;
    this.selectedSeats = this.addOrRemove(this.selectedSeats, seatNumber);
  }

  updateSeatType(seatNumber: any, gender: any) {
    if (gender === 'm') {
      this.selectedMaleSeats = this.addOrRemove(this.selectedMaleSeats, seatNumber);
    } else {
      this.selectedFemaleSeats = this.addOrRemove(this.selectedFemaleSeats, seatNumber);
    }
  }

  addOrRemove = (array: any, item: any) => {
    const exists = array.includes(item);

    if (exists) {
      return array.filter((c: any) => {
        return c !== item;
      });
    } else {
      const result = array;
      result.push(item);
      return result;
    }
  };

  setCountry(e: any) {
    var res = this.currencyData.filter((item: any) => {
      return item.name.currencyName == e.target.value;
    });
    this.currencySymbol = res[0].name.currencySymbol;
    this.convertedPriceToPKR = (this.ammount / res[0].rate).toFixed(2);
  }
  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  busBookingData = {
    origin_city_name: '',
    destination_city_name: '',
    service_id: '',
    date: '',
    deptime: '',
    time_id: '',
    schedule_id: '',
    route_id: '',
    number_of_seats: '',
    seat_numbers_male: '',
    seat_numbers_female: '',
    name: '',
    email: '',
    phone: '',
    cnic: '',
    ticket_price: '',
    total_price: '',
    //  claim_id:0
  };

  setBusBookingData(data: any, userInfo: any) {
    this.busBookingData.name = userInfo.name + '';
    this.busBookingData.email = userInfo.email + '';
    this.busBookingData.phone = userInfo.phoneNo + '';
    this.busBookingData.cnic = userInfo.cnic + '';
    this.busBookingData.origin_city_name = this.data.origin_city_name + '';
    this.busBookingData.destination_city_name = this.data.destination_city_name + '';
    this.busBookingData.service_id = data.serviceId + '';
    this.busBookingData.date = data.date + '';
    this.busBookingData.deptime = data.departureTime + '';
    this.busBookingData.time_id = data.time_id + '';
    this.busBookingData.schedule_id = data.schedule_id + '';
    this.busBookingData.route_id = data.route_id + '';
    this.busBookingData.number_of_seats = this.selectedSeats.length + '';
    this.busBookingData.seat_numbers_male = this.selectedMaleSeats.toString();
    this.busBookingData.seat_numbers_female = this.selectedFemaleSeats.toString();
    this.busBookingData.ticket_price = data.discountedFare + '';
    this.busBookingData.total_price = this.totalAmount + '';
    // this.busBookingData.claim_id = data.outboundRoute[0].depart;
  }

  bookingId: any = null;

  bookBus(data: any) {
    let userInfo = this.busForm.value;
    if (this.selectedSeats.length < 1) {
      this.toastr.error('Please select atleast one seat');
    } else if (userInfo && !userInfo.name) {
      this.toastr.error('Name is must');
    } else if (userInfo && !userInfo.phoneNo) {
      this.toastr.error('Phone is must');
    } else if (userInfo && !userInfo.email) {
      this.toastr.error('Email is must');
    } else if (userInfo && !userInfo.cnic) {
      this.toastr.error('Cnic or Passport is must');
    } else {
      this.setBusBookingData(data, userInfo);
      this.eventService.bookBus(this.busBookingData).subscribe(
        (res: any) => {
          this.toastr.success('Your booking request has been received! you will be notify via email');
          this.formFlag = false;
          this.user = userInfo;
          this.paymentFlag = true;
          this.bookingId = res.data;
          //this.ngxSmartModalService.getModal('busModalPopup').close();
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
}
