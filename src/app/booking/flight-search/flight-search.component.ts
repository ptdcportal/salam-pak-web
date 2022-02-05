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
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  isLoading: any = true;
  bookingFlightForm!: FormGroup;
  flightFrom!: FormGroup;
  filter: any;
  p: number = 1;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrows: true,
  };
  currentDate = moment(new Date()).format('YYYY-MM-DD');
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
  flightItem: any;
  currencyData: any;
  currencies: any;
  currencySymbol: any;
  convertedPriceToPKR: string;
  userData: any;
  refId: any;
  data = {
    cabin: '',
    departureCityName: '',
    destinationCityName: '',
    dep_date: '',
    return_date: '',
    flightTrip: '',
    no_of_adults: 1,
    no_of_children: 0,
    no_of_infants: 0,
  };
  user: any;
  formFlag = true;
  paymentFlag = false;
  paymentSuccesFlag = false;
  bookingId: any = null;
  bookingResponse: any = null;
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
      departureCityName: this.route.snapshot.queryParams.from,
      destinationCityName: this.route.snapshot.queryParams.to,
      dep_date: this.route.snapshot.queryParams.arrival,
      return_date: this.route.snapshot.queryParams.returnDate,
      flightTrip: this.route.snapshot.queryParams.flightTrip,
      no_of_adults: this.route.snapshot.queryParams.flightAdult,
      no_of_children: this.route.snapshot.queryParams.flightChild,
      no_of_infants: this.route.snapshot.queryParams.flightInfants,
    };
    if (this.data) {
      this.getFlights(this.data, this.pageSize, this.skip, '-price');
    }
    this.createForm();
  }

  increment(form: any, field: any) {
    form.patchValue({
      [field]: +form.get(field).value + 1,
    });
  }

  decrement(form: any, field: any) {
    form.patchValue({
      [field]: form.get(field).value > 0 ? +form.get(field).value - 1 : 0,
    });
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
  }

  getFlights(data: any, pageSize = 0, skip = 0, filter: any) {
    this.isLoading = true;
    this.eventService.getFlights(data, pageSize, skip, filter).subscribe((data: any) => {
      this.isLoading = false;
      this.allEvents = data.data && data.data.airline;
      this.refId = data.data && data.data.refId;
      this.pageSize = data.data.meta && data.data.meta.pageSize;
      this.skip = data.data.meta && data.data.meta.skip;
      this.total = data.data.meta && data.data.meta.total;
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
    this.bookingFlightForm = this.formBuilder.group({
      cabin: '',
      departureCityName: '',
      destinationCityName: '',
      dep_date: '',
      return_date: '',
      flightTrip: '',
      no_of_adults: 1,
      no_of_children: 0,
      no_of_infants: 0,
    });
    this.flightFrom = this.formBuilder.group({
      srName: '',
      firstName: '',
      phoneNo: '',
      email: '',
      cnic: '',
      country: '',
      lastName: '',
    });
    this.bookingFlightForm.patchValue({
      cabin: this.data.cabin,
      departureCityName: this.data.departureCityName,
      destinationCityName: this.data.destinationCityName,
      dep_date: this.data.dep_date,
      return_date: this.data.return_date,
      flightTrip: this.data.flightTrip,
      no_of_adults: this.data.no_of_adults,
      no_of_children: this.data.no_of_children,
      no_of_infants: this.data.no_of_infants,
    });
    this.flightFrom.patchValue({
      srName: this.userData && this.userData.profile && this.userData.profile.middleName,
      firstName: this.userData && this.userData.profile && this.userData.profile.firstName,
      lastName: this.userData && this.userData.profile && this.userData.profile.lastName,
      phoneNo: this.userData && this.userData.profile && this.userData.profile.mobile,
      email: this.userData && this.userData.profile && this.userData.profile.email,
      cnic: this.userData && this.userData.profile && this.userData.profile.nic,
      country: this.userData && this.userData.profile && this.userData.profile.country,
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
    if (this.bookingFlightForm.valid) {
      this.data = this.bookingFlightForm.value;
      this.getFlights(this.data, this.pageSize, 0, '-price');
    }
  }

  nextPage() {
    this.getFlights(this.data, this.pageSize, this.skip, '-price');
  }

  getCurrencyInfo() {
    this.shellService.getCurrenciesInfo().subscribe((res) => {
      this.currencyData = res; //(1,4) ...slice(1, 10)
      // console.log('currenccyyyy', res);
      this.currencies = res.slice(1, 10);
    });
  }
  hotelFilterTab(tabsort: string, tabvalue: number) {
    this.tab = tabvalue;
    this.getFlights(this.data, this.pageSize, this.skip, tabsort);
  }

  openFlightModal(item: any) {
    this.user = null;
    this.formFlag = true;
    this.paymentFlag = false;
    this.paymentSuccesFlag = false;
    this.flightItem = item;
    this.bookingId = null;
    this.bookingResponse = null;
    this.ngxSmartModalService.getModal('flightModalPopup').open();
    console.log(this.ammount);
  }

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

  fightBookingData = {
    no_of_adults: '',
    ref_id: '',
    journey_ref_id: '',
    traveler_type: new Array(),
    prefix: new Array(),
    firstname: new Array(),
    lastname: new Array(),
    seat: new Array(),
    country: '',
    phone_number: '',
    email: '',
    cnic: '',

    // no_of_children: '',
    // no_of_infants: '',
    // gender: '',
    // age: '',
    // dob: '',
    // passenger_country: '',
    // nationality	: '',
    // passport_no: '',
    // passport_expiry: '',
    // address_name: '',
    // street: '',
    // city: '',
    // state: '',
    // postal_code	: '',
    // area_code	: '',
    // country_code: '',
    // location: '',
    //
  };

  setFlightBookingData(data: any, userInfo: any) {
    this.fightBookingData.no_of_adults = this.data.no_of_adults.toString();
    this.fightBookingData.ref_id = this.refId;
    this.fightBookingData.journey_ref_id = data.journey_ref_id;
    this.fightBookingData.traveler_type = ['ADT'];
    this.fightBookingData.prefix = [userInfo.srName];
    this.fightBookingData.firstname = userInfo.firstName;
    this.fightBookingData.lastname = userInfo.lastName;
    this.fightBookingData.seat = [data.outboundRoute[0].air_segment_ref_key];
    this.fightBookingData.country = userInfo.country;
    this.fightBookingData.phone_number = userInfo.phoneNo;
    this.fightBookingData.email = userInfo.email;
    this.fightBookingData.cnic = userInfo.cnic;

    // this.fightBookingData.no_of_children = "";
    // this.fightBookingData.no_of_infants = "";
    // this.fightBookingData.gender =  '';
    // this.fightBookingData.age = "";
    // this.fightBookingData.dob = "";
    // this.fightBookingData.passenger_country = "";
    // this.fightBookingData.nationality	 = "";
    // this.fightBookingData.passport_no = "";
    // this.fightBookingData.passport_expiry = "";
    // this.fightBookingData.address_name = "";
    // this.fightBookingData.street = "";
    // this.fightBookingData.city = "";
    // this.fightBookingData.state = "";
    // this.fightBookingData.postal_code	 = "";
    // this.fightBookingData.area_code	 = "";
    // this.fightBookingData.country_code = "";
    // this.fightBookingData.location = "";
  }

  bookFlight(data: any) {
    let userInfo = this.flightFrom.value;
    if (userInfo && !userInfo.firstName) {
      this.toastr.error('First name is must');
    } else if (userInfo && !userInfo.lastName) {
      this.toastr.error('Last name is must');
    } else if (userInfo && !userInfo.phoneNo) {
      this.toastr.error('Phone is must');
    } else if (userInfo && !userInfo.email) {
      this.toastr.error('Email is must');
    } else if (userInfo && !userInfo.cnic) {
      this.toastr.error('CNIC or passport is must');
    } else if (userInfo && !userInfo.country) {
      this.toastr.error('Country is must');
    } else {
      this.setFlightBookingData(data, userInfo);
      this.eventService.bookFlight(this.fightBookingData).subscribe(
        (res: any) => {
          this.toastr.success('Your booking request has been received! you will be notify via email');
          this.formFlag = false;
          this.user = userInfo;
          this.paymentFlag = true;
          this.bookingId = res.data;
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
