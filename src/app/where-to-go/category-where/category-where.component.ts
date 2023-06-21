import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Route } from '@angular/router';
import defaultImage1 from '../../../assets/images/wheretogo/cities.png';
import defaultImage2 from '../../../assets/images/wheretogo/beaches.png';
import defaultImage3 from '../../../assets/images/wheretogo/deserts.png';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Shell } from '../../shell/shell.service';

const responsiveSettings = [
  {
    breakpoint: 1920,
    settings: {
      slidesToShow: 4.0,
      // infinite: true
    },
  },
  {
    breakpoint: 1042,
    settings: {
      slidesToShow: 3.0,
      // infinite: true
    },
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 2.0,
      // infinite: true
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1.5,
      // infinite: true
    },
  },
];

@Component({
  selector: 'app-category-where',
  templateUrl: './category-where.component.html',
  styleUrls: ['./category-where.component.scss'],
})
export class CategoryWhereComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  category: any;
  p: number = 1;
  q: number = 1;
  locations: any = [];
  categories: any = [];
  slideConfig = {
    slidesToShow: 4.5, //4.5
    slidesToScroll: 4,
    arrows: true,
    infinite: false,
    responsive: responsiveSettings,
  };
  images = [defaultImage1, defaultImage2, defaultImage3];
  featuredCategories: any = [];
  constructor(
    private readonly shellService: Shell,
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService
  ) {
    this.category = this.route.snapshot.data.category;
    this.getCategoryLocations(this.category._id);
    // debugger;
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // this.loadScript();
    this.getFilters();
  }

  getFilters() {
    this.eventService.getDestinationFilters().then((categories) => {
      this.categories = categories;
    });
  }

  getCategoryLocations(id: string) {
    // Mountain based locations : "5f66b9b8e008c9f9b58dacd8"
    // https://ptdc.findmyadventure.pk/api/location?parentCategories=[%225f66b9b8e008c9f9b58dacd8%22]
    this.eventService.getCategoryLocations(id).then((locs) => {
      // const locations = locs.slice(0, 2);
      // locations.filter((loc: any, index: number) => {
      //   if (!loc.thumbnail) {
      //     loc.thumbnail = this.images[index];
      //   }
      // });
      this.locations = locs;
      // debugger;
      // console.log('locationsssss', locations);
    });
  }

  ngAfterContentChecked(): void {
    if (this.locations.length > 0) {
      this.featuredCategories = this.locations.filter((i: any) => {
        return (i.isFeatured = true);
      });
      this.featuredCategories = this.featuredCategories.slice(0, 5);
      //  console.log('sjdkf: ',this.featuredCategories);
    }
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }
  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
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
}
