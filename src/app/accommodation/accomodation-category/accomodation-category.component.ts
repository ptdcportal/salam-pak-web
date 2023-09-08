import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EventService } from '../../services/event.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ActivatedRoute } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

@Component({
  selector: 'app-accomodation-category',
  templateUrl: './accomodation-category.component.html',
  styleUrls: ['./accomodation-category.component.scss'],
})
export class AccomodationCategoryComponent
  implements OnInit, AfterContentChecked {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  category: any;
  p: number = 1;
  pageSize: number = 10;
  categories: any = [];
  accomodations: any = [];
  allAccomodations: any = [];
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    infinite: false,
    arrows: true,
  };
  ptdcRes: any = [];
  finalMergedArray: any = [];
  constructor(
    private readonly eventService: EventService,
    private readonly shellService: Shell,
    private route: ActivatedRoute
  ) {
    this.category = this.route.snapshot.data.category;
    const queryString = Object.keys(this.params)
      .map((key) => `${key}=${this.params[key]}`)
      .join('&');

    this.getAccomodationsListing(this.pageSize);
    // // debugger; // featured events
    const queryString2 = Object.keys(this.params2)
      .map((key) => `${key}=${this.params2[key]}`)
      .join('&');

    this.getAllFMAAccomodationsListing(); // all events
    this.getAllPTDCAccomodationsListing(queryString);
  }

  get params2() {
    return {};
  }
  get params() {
    return {
      // isFeatured: true,
      categoryId: `"${this.category._id}"`,
      pageSize: 0,
    };
  }
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.getFilters();
  }
  getAccomodationsListing(pageSize: any) {
    // this.category.slug = this.category.slug == 'hotels' ? 'hotel' : this.category.slug;
    // this.category.slug = this.category.slug == 'guest-houses' ? 'guest-house' : this.category.slug;
    // this.category.slug = this.category.slug == 'camping' ? 'camps' : this.category.slug;

    // let params = `subCategorySlugs=%5B%22${this.category.slug}%22%5D&pageSize=0&skip=0&isFeatured=true`;

    // this.eventService.getAccomodationsListing(params).subscribe((listing) => {
    //   this.accomodations = listing;
    // }, err => {

    //gets featured accommodations (ptdc only)...
    let queryString = `isFeatured=true&pageSize=0&skip=0`;
    this.eventService.getAllPTDCAccomodations(queryString).then((res) => {
      this.accomodations = res;
      console.log(res, this.accomodations)
      this.accomodations.forEach((item: any) => {
        item.thumbnails = [item.thumbnail];
        item['name'] = item.hotelName;
        item.type = 'ptdc';
      });
      // console.log(this.ptdcRes);
      // debugger;
    });
    // });
  }

  getAllFMAAccomodationsListing() {
    let params = `subCategorySlugs=%5B%22${this.category.slug}%22%5D&pageSize=0&skip=0`;
    this.eventService.getAccomodationsListing(params).then((listing) => {
      this.allAccomodations = listing;
      this.allAccomodations.forEach((item: any) => {
        item.type = 'fma';
      });
    });
  }

  getAllPTDCAccomodationsListing(params: any) {
    let param = `pageSize=0&skip=0`;
    this.eventService.getAllPTDCAccomodations(param).then((res) => {
      this.ptdcRes = res.data;
      this.ptdcRes.forEach((item: any) => {
        item.thumbnails = [item.thumbnail];
        item['name'] = item.hotelName;
        item.type = 'ptdc';
      });
      // console.log(this.ptdcRes);
      // debugger;
    });
  }

  // mergeBothArrays() {
  //   this.finalMergedArray = this.ptdcRes;
  //   // console.log(this.finalMergedArray);
  // }
  getFilters() {
    // debugger
    this.shellService.currentMessage.subscribe((data: any) => {
      this.categories = data.categories;
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

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  ngAfterContentChecked(): void {
    // this.mergeBothArrays();
  }

  onPageChange = (event: any) => {
    this.p = event;
    //  if() {
    //   this.getAccomodationsListing(`${this.pageSize + 10}`);
    //   debugger;
    //  }
  };
}
