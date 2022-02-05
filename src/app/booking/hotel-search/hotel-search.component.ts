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

let states: any = [];
@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss'],
})
export class HotelSearchComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  isLoading: any = true;
  currentDate = moment(new Date()).format('YYYY-MM-DD');
  bookingForm!: FormGroup;
  public cityName: any;
  filter: any;
  p: number = 1;
  slug: any;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrows: true,
  };
  featuredEvents: any = [];
  allEvents: any = [];
  topHotels: any = [];
  pageSize = 10;
  skip = 0;
  total = 0;
  tab = 1;
  star_rating = 4;
  locData: any = [];
  selectedLoc: any;
  userId: any;
  refId: any;
  isLoggedIn: any;
  data = {
    cityName: 'islamabad',
    dep_date: '2021/02/09',
    return_date: '2021/02/09',
    no_of_adults: 1,
    no_of_children: 0,
    rooms: 1,
  };
  eventId: any;
  ammount: any;
  currencyData: any;
  currencies: any;
  currencySymbol: any;
  convertedPriceToPKR: string;
  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly eventService: EventService,
    private credentialsService: CredentialsService,
    private readonly shellService: Shell,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.userId = localStorage.getItem('userId');
    this.isLoggedIn = this.credentialsService.isAuthenticated();
    this.slug = this.route.snapshot.queryParams.location;
    this.cityName = this.slug;
    this.getCities();
    this.data = {
      cityName: this.route.snapshot.queryParams.location,
      dep_date: this.route.snapshot.queryParams.checkIn,
      return_date: this.route.snapshot.queryParams.checkOut,
      no_of_adults: this.route.snapshot.queryParams.adults,
      no_of_children: this.route.snapshot.queryParams.children,
      rooms: this.route.snapshot.queryParams.room,
    };
    if (this.slug) {
      this.getHotels(this.data, this.pageSize, this.skip, '-rating');
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
    console.log(this.allEvents);
  }

  getHotels(data: any, pageSize = 0, skip = 0, filter: any) {
    this.isLoading = true;
    this.eventService.gethotels(data, pageSize, skip, filter).subscribe((data: any) => {
      this.isLoading = false;
      this.allEvents = data.data && data.data.Hotels;
      this.refId = data.data && data.data.refId;
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
    this.bookingForm = this.formBuilder.group({
      dep_date: ['', Validators.required],
      cityName: ['', Validators.required],
      return_date: ['', Validators.required],
      rooms: [1],
      no_of_adults: [1],
      no_of_children: [0],
    });
    this.bookingForm.patchValue({
      cityName: this.data.cityName,
      dep_date: this.data.dep_date,
      return_date: this.data.return_date,
      rooms: this.data.rooms,
      no_of_adults: this.data.no_of_adults,
      no_of_children: this.data.no_of_children,
    });
  }

  itemSelected(event: any) {
    this.selectedLoc = this.locData.filter((i: any) => {
      return i.name == event.target.value;
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
    if (this.bookingForm.valid) {
      this.data = this.bookingForm.value;
      this.getHotels(this.data, this.pageSize, 0, '-rating');
    }
  }
  navigateHotelDetail(item: any) {
    let data = {
      refId: this.refId,
      hotelRefId: item.hotelRefId,
      hotelSource: item.hotelSource === 'local' ? 'local' : 'bookme',
      hotelId: item.hotelId,
      checkIn: this.route.snapshot.queryParams.checkIn,
      checkOut: this.route.snapshot.queryParams.checkOut,
      adults: this.route.snapshot.queryParams.adults,
      children: this.route.snapshot.queryParams.children,
      room: this.route.snapshot.queryParams.room,
    };
    this.router.navigate([`/booking/hotel-detail`], {
      queryParams: data,
    });
  }

  nextPage() {
    this.getHotels(this.data, this.pageSize, this.skip, '-rating');
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
    this.getHotels(this.data, this.pageSize, this.skip, tabsort);
  }

  openCurrencyModal(event: any) {
    this.ammount = event;
    this.ngxSmartModalService.getModal('agoraCurrencyModal').open();
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
}
