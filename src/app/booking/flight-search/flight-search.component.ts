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
import { airports } from 'src/assets/constants/flight-airports';
import axios from 'axios';

interface Airline {
  name: string;
  code: string;
  is_lowcost: boolean;
  logo: string;
}

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
  // data = {
  //   cabin: '',
  //   departureCityName: '',
  //   destinationCityName: '',
  //   dep_date: '',
  //   return_date: '',
  //   flightTrip: '',
  //   no_of_adults: 1,
  //   no_of_children: 0,
  //   no_of_infants: 0,
  // };
  data = {  
    legs: [  
       {  
          departureCode:"ISB",
          arrivalCode:"DXB",
          outboundDate:"2024-04-08"
       }
    ],
    adultsCount:1,
    childrenCount:0,
    infantsCount:0,
    cabin:"economy",
    currencyCode:"PKR",
    locale:"en",

    // departureCityName: airports.filter((i: any) => {
    //   return (i.location == this.route.snapshot.queryParams.from);
    // }),
    // departureCityName: this.route.snapshot.queryParams.to,
    // destinationCityName: airports.filter((i: any) => {
    //   return (i.location == this.route.snapshot.queryParams.to);
    // }),
    destinationCityName: this.route.snapshot.queryParams.to,
    dep_date: "2024-04-08",
    return_date: this.route.snapshot.queryParams.returnDate,
    flightTrip: this.route.snapshot.queryParams.flightTrip,
    no_of_adults: this.route.snapshot.queryParams.flightAdult,
    no_of_children: this.route.snapshot.queryParams.flightChild,
    no_of_infants: this.route.snapshot.queryParams.flightInfants,
 };
  user: any;
  formFlag = true;
  paymentFlag = false;
  paymentSuccesFlag = false;
  bookingId: any = null;
  bookingResponse: any = null;
  airlines: Airline[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private credentialsService: CredentialsService,
    private readonly shellService: Shell,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    public ngxSmartModalService: NgxSmartModalService,
    private toastr: ToastrService,
    private domSanitizer: DomSanitizer,
    private readonly router: Router
  ) {
    this.userId = localStorage.getItem('userId');
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.isLoggedIn = this.credentialsService.isAuthenticated();
    this.eventService.getAirlines().then((airlines: Airline[]) => {
      this.airlines = airlines;
    });
    this.getCities();
    airports.filter((i: any) => {
      return (i.location == this.route.snapshot.queryParams.to);
    });
    // this.data = {
      // cabin: this.route.snapshot.queryParams.cabin,
      // // departureCityName: airports.filter((i: any) => {
      // //   return (i.location == this.route.snapshot.queryParams.from);
      // // }),
      // // departureCityName: this.route.snapshot.queryParams.to,
      // // destinationCityName: airports.filter((i: any) => {
      // //   return (i.location == this.route.snapshot.queryParams.to);
      // // }),
      // destinationCityName: this.route.snapshot.queryParams.to,
      // dep_date: this.route.snapshot.queryParams.arrival,
      // return_date: this.route.snapshot.queryParams.returnDate,
      // flightTrip: this.route.snapshot.queryParams.flightTrip,
      // no_of_adults: this.route.snapshot.queryParams.flightAdult,
      // no_of_children: this.route.snapshot.queryParams.flightChild,
      // no_of_infants: this.route.snapshot.queryParams.flightInfants,
    // };
    if (this.data) {
      this.getFlights(this.data, this.pageSize, this.skip, '-price');
    }
    // this.createForm();
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
    // this.isLoading = true;
    this.allEvents = 
      {
        "flightItineraries": [
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "613",
                            "airlineCode": "EK",
                            "operatingAirlineCode": "EK",
                            "aircraftCode": "77W",
                            "departureDateTime": "2024-03-28T09:00:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T11:35:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 94632,
                    "pricePerAdult": 91350,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "false"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAwfCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "5144",
                            "airlineCode": "J2",
                            "operatingAirlineCode": "J2",
                            "aircraftCode": "319",
                            "departureDateTime": "2024-03-28T02:00:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:30:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "GYD"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "11",
                            "airlineCode": "J2",
                            "operatingAirlineCode": "J2",
                            "aircraftCode": "788",
                            "departureDateTime": "2024-03-28T10:00:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T12:55:00.000+04:00",
                            "departureAirportCode": "GYD",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 108321,
                    "pricePerAdult": 104644,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "false"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAxfCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "316",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T04:40:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T07:30:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "RUH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "205",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T12:25:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T15:25:00.000+04:00",
                            "departureAirportCode": "RUH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 112051,
                    "pricePerAdult": 108410,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAyfCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "208",
                            "airlineCode": "KU",
                            "operatingAirlineCode": "KU",
                            "aircraftCode": "338",
                            "departureDateTime": "2024-03-28T03:10:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:30:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "KWI"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "671",
                            "airlineCode": "KU",
                            "operatingAirlineCode": "KU",
                            "aircraftCode": "32A",
                            "departureDateTime": "2024-03-28T09:25:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T12:20:00.000+04:00",
                            "departureAirportCode": "KWI",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 116460,
                    "pricePerAdult": 112499,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAzfCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "633",
                            "airlineCode": "QR",
                            "operatingAirlineCode": "QR",
                            "aircraftCode": "788",
                            "departureDateTime": "2024-03-28T03:10:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:20:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "DOH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "1006",
                            "airlineCode": "QR",
                            "operatingAirlineCode": "QR",
                            "aircraftCode": "359",
                            "departureDateTime": "2024-03-28T08:00:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T10:15:00.000+04:00",
                            "departureAirportCode": "DOH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 133455,
                    "pricePerAdult": 129061,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKA0fCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "615",
                            "airlineCode": "QR",
                            "operatingAirlineCode": "QR",
                            "aircraftCode": "359",
                            "departureDateTime": "2024-03-28T08:35:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T10:45:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "DOH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "1006",
                            "airlineCode": "QR",
                            "operatingAirlineCode": "QR",
                            "aircraftCode": "77W",
                            "departureDateTime": "2024-03-29T08:00:00.000+03:00",
                            "arrivalDateTime": "2024-03-29T10:15:00.000+04:00",
                            "departureAirportCode": "DOH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 134199,
                    "pricePerAdult": 129786,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAGgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "316",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T04:40:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T07:30:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "RUH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "211",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T15:25:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T18:25:00.000+04:00",
                            "departureAirportCode": "RUH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 155266,
                    "pricePerAdult": 150080,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAHgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "208",
                            "airlineCode": "KU",
                            "operatingAirlineCode": "KU",
                            "aircraftCode": "338",
                            "departureDateTime": "2024-03-28T03:10:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:30:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "KWI"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "673",
                            "airlineCode": "KU",
                            "operatingAirlineCode": "KU",
                            "aircraftCode": "32N",
                            "departureDateTime": "2024-03-28T15:00:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T17:55:00.000+04:00",
                            "departureAirportCode": "KWI",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 162744,
                    "pricePerAdult": 157129,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAIgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "615",
                            "airlineCode": "EK",
                            "operatingAirlineCode": "EK",
                            "aircraftCode": "77W",
                            "departureDateTime": "2024-03-28T03:15:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:45:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 170712,
                    "pricePerAdult": 164710,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAJgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "316",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T04:40:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T07:30:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "RUH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "207",
                            "airlineCode": "XY",
                            "operatingAirlineCode": "XY",
                            "aircraftCode": "320",
                            "departureDateTime": "2024-03-28T15:50:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T18:50:00.000+04:00",
                            "departureAirportCode": "RUH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 179958,
                    "pricePerAdult": 173890,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAKgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "5144",
                            "airlineCode": "J2",
                            "operatingAirlineCode": "J2",
                            "aircraftCode": "319",
                            "departureDateTime": "2024-03-28T02:00:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T05:30:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "GYD"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "710",
                            "airlineCode": "FZ",
                            "operatingAirlineCode": "FZ",
                            "aircraftCode": "7M8",
                            "departureDateTime": "2024-03-28T12:15:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T15:15:00.000+04:00",
                            "departureAirportCode": "GYD",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 266051,
                    "pricePerAdult": 256702,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "false"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKALgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "711",
                            "airlineCode": "TK",
                            "operatingAirlineCode": "TK",
                            "aircraftCode": "333",
                            "departureDateTime": "2024-03-28T06:25:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T11:20:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "IST"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "764",
                            "airlineCode": "TK",
                            "operatingAirlineCode": "TK",
                            "aircraftCode": "333",
                            "departureDateTime": "2024-03-29T07:55:00.000+03:00",
                            "arrivalDateTime": "2024-03-29T13:20:00.000+04:00",
                            "departureAirportCode": "IST",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 359146,
                    "pricePerAdult": 346857,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKAMgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "711",
                            "airlineCode": "TK",
                            "operatingAirlineCode": "TK",
                            "aircraftCode": "333",
                            "departureDateTime": "2024-03-28T06:25:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T11:20:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "IST"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "760",
                            "airlineCode": "TK",
                            "operatingAirlineCode": "TK",
                            "aircraftCode": "359",
                            "departureDateTime": "2024-03-28T19:50:00.000+03:00",
                            "arrivalDateTime": "2024-03-29T01:15:00.000+04:00",
                            "departureAirportCode": "IST",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 419027,
                    "pricePerAdult": 404597,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/DhG4i5uFuDKANgCv+RAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "348",
                            "airlineCode": "WY",
                            "operatingAirlineCode": "WY",
                            "aircraftCode": "738",
                            "departureDateTime": "2024-03-28T15:15:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T17:30:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "MCT"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "611",
                            "airlineCode": "WY",
                            "operatingAirlineCode": "WY",
                            "aircraftCode": "7M8",
                            "departureDateTime": "2024-03-28T20:25:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T21:35:00.000+04:00",
                            "departureAirportCode": "MCT",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 68132,
                    "pricePerAdult": 66065,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/ocJui55CuDKA6AL1FSAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "771",
                            "airlineCode": "GF",
                            "operatingAirlineCode": "GF",
                            "aircraftCode": "32Q",
                            "departureDateTime": "2024-03-28T06:50:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T08:55:00.000+03:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "BAH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "504",
                            "airlineCode": "GF",
                            "operatingAirlineCode": "GF",
                            "aircraftCode": "32N",
                            "departureDateTime": "2024-03-28T09:50:00.000+03:00",
                            "arrivalDateTime": "2024-03-28T12:10:00.000+04:00",
                            "departureAirportCode": "BAH",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 70769,
                    "pricePerAdult": 68753,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/ocJui55CuDKA7AL1FSAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "348",
                            "airlineCode": "WY",
                            "operatingAirlineCode": "WY",
                            "aircraftCode": "738",
                            "departureDateTime": "2024-03-28T15:15:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T17:30:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "MCT"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "623",
                            "airlineCode": "WY",
                            "operatingAirlineCode": "WY",
                            "aircraftCode": "7M8",
                            "departureDateTime": "2024-03-28T18:55:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T20:10:00.000+04:00",
                            "departureAirportCode": "MCT",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 74499,
                    "pricePerAdult": 72205,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/ocJui55CuDKA8AL1FSAAAA=="
            },
            {
                "leg1": {
                    "segments": [
                        {
                            "cabin": "Economy",
                            "flightNumber": "232",
                            "airlineCode": "EY",
                            "operatingAirlineCode": "EY",
                            "aircraftCode": "32A",
                            "departureDateTime": "2024-03-28T04:15:00.000+05:00",
                            "arrivalDateTime": "2024-03-28T06:55:00.000+04:00",
                            "departureAirportCode": "ISB",
                            "arrivalAirportCode": "AUH"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "386",
                            "airlineCode": "EY",
                            "operatingAirlineCode": "EY",
                            "aircraftCode": "32A",
                            "departureDateTime": "2024-03-28T16:45:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T17:55:00.000+04:00",
                            "departureAirportCode": "AUH",
                            "arrivalAirportCode": "MCT"
                        },
                        {
                            "cabin": "Economy",
                            "flightNumber": "623",
                            "airlineCode": "WY",
                            "operatingAirlineCode": "WY",
                            "aircraftCode": "7M8",
                            "departureDateTime": "2024-03-28T18:55:00.000+04:00",
                            "arrivalDateTime": "2024-03-28T20:10:00.000+04:00",
                            "departureAirportCode": "MCT",
                            "arrivalAirportCode": "DXB"
                        }
                    ]
                },
                "price": {
                    "currencyCode": "PKR",
                    "totalAmount": 1083209,
                    "pricePerAdult": 1044895,
                    "pricePerChild": 0,
                    "pricePerInfant": 0,
                    "isRefundable": "true"
                },
                "deeplinkUrl": "https://mosafir.pk/Wego/booking/ocJui55CuDKA9AL1FSAAAA=="
            }
        ]
      }
    ;
    this.total = this.allEvents.length;
  // console.log(this.allEvents);
  
    // axios.post('https://mosafir.pk/API/Wego/flights_listing', data).then(function (response) {
    //   // handle success
    //   console.log(response);
    //   this.isLoading = false;
    //   // this.allEvents = data && data.airline;
    //   // this.refId = data && data.refId;
    //   // this.pageSize = data.meta && data.meta.pageSize;
    //   // this.skip = data.meta && data.meta.skip;
    //   // // this.total = data.meta && data.meta.total;
    //   // this.total = data.length;
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });
    this.eventService.getFlightSearch(data).then((data: any) => {
      console.log(data);

      console.log("response data", this.airlines);
      console.log("LOGO", this.getAirlineLogo('PA'));
    })




    // this.eventService
    //   .getFlights(data, pageSize, skip, filter)
    //   .then((data: any) => {
    //     console.log('flight data', data);
    //     this.isLoading = false;
    //     this.allEvents = data && data.airline;
    //     this.refId = data && data.refId;
    //     this.pageSize = data.meta && data.meta.pageSize;
    //     this.skip = data.meta && data.meta.skip;
    //     // this.total = data.meta && data.meta.total;
    //     this.total = data.length;
    //   });
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

  public getAirlineLogo(code: string): string {
    const airline = this.airlines.find(airline => airline.code === code);
    return airline ? airline.logo : '';
  }

  public getAirlineName(code: string): string {
      const airline = this.airlines.find(airline => airline.code === code);
      return airline ? airline.name : '';
  }

  private createForm() {
    // this.bookingFlightForm = this.formBuilder.group({
    //   cabin: '',
    //   departureCityName: '',
    //   destinationCityName: '',
    //   dep_date: '',
    //   return_date: '',
    //   flightTrip: '',
    //   no_of_adults: 1,
    //   no_of_children: 0,
    //   no_of_infants: 0,
    // });
    // this.flightFrom = this.formBuilder.group({
    //   srName: '',
    //   firstName: '',
    //   phoneNo: '',
    //   email: '',
    //   cnic: '',
    //   country: '',
    //   lastName: '',
    // });
    // this.bookingFlightForm.patchValue({
    //   cabin: this.data.cabin,
    //   departureCityName: this.data.departureCityName,
    //   destinationCityName: this.data.destinationCityName,
    //   dep_date: this.data.dep_date,
    //   return_date: this.data.return_date,
    //   flightTrip: this.data.flightTrip,
    //   no_of_adults: this.data.no_of_adults,
    //   no_of_children: this.data.no_of_children,
    //   no_of_infants: this.data.no_of_infants,
    // });
    // this.flightFrom.patchValue({
    //   srName:
    //     this.userData &&
    //     this.userData.profile &&
    //     this.userData.profile.middleName,
    //   firstName:
    //     this.userData &&
    //     this.userData.profile &&
    //     this.userData.profile.firstName,
    //   lastName:
    //     this.userData &&
    //     this.userData.profile &&
    //     this.userData.profile.lastName,
    //   phoneNo:
    //     this.userData && this.userData.profile && this.userData.profile.mobile,
    //   email:
    //     this.userData && this.userData.profile && this.userData.profile.email,
    //   cnic: this.userData && this.userData.profile && this.userData.profile.nic,
    //   country:
    //     this.userData && this.userData.profile && this.userData.profile.country,
    // });
  }

  getCities() {
    this.homeService.getCities().then((data: any) => {
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
        term.length < 2
          ? []
          : states
              .filter(
                (v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
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
    this.shellService.getCurrenciesInfo().then((res) => {
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
    // console.log(this.ammount);
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
    // this.fightBookingData.no_of_adults = this.data.no_of_adults.toString();
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
          this.toastr.success(
            'Your booking request has been received! you will be notify via email'
          );
          this.formFlag = false;
          this.user = userInfo;
          // this.paymentFlag = true;
          this.bookingId = res.data;
          this.router.navigate(['user/my-bookings']);
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
    // console.log(data);
    this.bookingResponse = data;
  }
}
