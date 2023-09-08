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

let states: any = [];
@Component({
  selector: 'app-accomodation-home-search-agoda-detail',
  templateUrl: './accomodation-home-search-agoda-detail.component.html',
  styleUrls: ['./accomodation-home-search-agoda-detail.component.scss'],
})
export class AccomodationHomeSearchAgodaDetailComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  bookingForm!: FormGroup;
  public location: any;
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
  star_rating = 4;
  locData: any = [];
  selectedLoc: any;
  userId: any;
  isLoggedIn: any;
  // data: any;
  accommodations: any = [];
  userPlans: any = [];
  eventId: any;
  ammount: any;
  currencyData: any;
  currencies: any;
  currencySymbol: any;
  convertedPriceToPKR: string;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private credentialsService: CredentialsService,
    private readonly shellService: Shell,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.userId = localStorage.getItem('userId');
    this.isLoggedIn = this.credentialsService.isAuthenticated();
    this.slug = this.route.snapshot.params.slug;
    this.location = this.slug;
    this.createForm();
    this.getCities();
    this.getWishlist();
    this.getUserPlan();
    if (this.slug) {
      this.getHotels(this.slug, this.pageSize, this.skip, null);
      this.getTopHotels(this.slug);
    }
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
    // console.log(this.allEvents);
  }

  getHotels(location: string, pageSize = 0, skip = 0, filter: any) {
    this.eventService
      .getAccomodationEvents(location, pageSize, skip, filter)
      .subscribe((data: any) => {
        this.allEvents = data.data;
        if (data) {
          data.data.filter((i: any) => {
            if (i.isFeatured) {
              this.featuredEvents.push(i);
            }
          });
        }
        // for(var i=0; i<=8; i++){
        //   this.allEvents[i]['key']=i;
        //   debugger;
        //   console.log(this.allEvents);
        // }
        this.loadScript();
      });
  }

  getTopHotels(location: string) {
    this.eventService
      .getAccomodationTopHotels(location, this.pageSize - 5, this.skip)
      .subscribe((data: any) => {
        this.topHotels = data.data;
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

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/hotel.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  private createForm() {
    this.bookingForm = this.formBuilder.group({
      checkIn: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.bookingForm.patchValue({
      location: 'islamabad',
    });
  }

  itemSelected(event: any) {
    this.selectedLoc = this.locData.filter((i: any) => {
      return i.name == event.target.value;
    });
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
    if (this.selectedLoc[0]?.slug && this.slug != this.selectedLoc[0]?.slug) {
      this.getHotels(this.selectedLoc[0]?.slug, this.pageSize, 0, null);
      this.getTopHotels(this.selectedLoc[0]?.slug);
    }
  }

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

    //  this.isInWishlist();
  }

  getUserPlan() {
    this.eventService.getUserPlan(this.userId).subscribe((data: any) => {
      // debugger;
      if (data?.accommodations.length) {
        data.accommodations?.forEach((item: any) => {
          this.userPlans.push(item._id);
        });
      } else {
        this.userPlans = [];
      }
    });
    //  this.isInPlan();
  }
  getCurrencyInfo() {
    this.shellService.getCurrenciesInfo().then((res) => {
      this.currencyData = res; //(1,4) ...slice(1, 10)
      // console.log('currenccyyyy', res);
      this.currencies = res.slice(1, 10);
    });
  }

  removeFromWishlist(eventId: string) {
    this.eventService
      .deleteAccommodationFromWishlist(eventId)
      .subscribe((data: any) => {
        this.accommodations.splice(this.accommodations.indexOf(eventId), 1);
      });
  }

  removeFromPlan(eventId: string) {
    this.eventService
      .removeAccommodationFromPlan(eventId)
      .subscribe((data: any) => {
        this.userPlans.splice(this.userPlans.indexOf(eventId), 1);
      });
  }

  addToWishlist(eventId: string) {
    this.eventService
      .addAccommodationToWishlist(eventId)
      .subscribe((data: any) => {
        this.getWishlist();
      });
  }

  addToPlan(eventId: string) {
    this.eventService.addAccommodationToPlan(eventId).subscribe((data: any) => {
      this.getUserPlan();
    });
  }

  isInWishlist(eventId: string) {
    return this.accommodations.includes(eventId);
  }

  isInPlan(eventId: string) {
    return this.userPlans.includes(eventId);
  }

  hotelFilterTab(tabsort: string) {
    this.getHotels(this.slug, this.pageSize, this.skip, tabsort);
  }

  openCurrencyModal(event: any) {
    this.ammount = event;
    this.ngxSmartModalService.getModal('agoraCurrencyModal').open();
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
}
