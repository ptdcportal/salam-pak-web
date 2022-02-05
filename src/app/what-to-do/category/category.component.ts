import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EventService } from '../../services/event.service';
import defaultImage from '../../../assets/images/whattodo/list1.png';
import { HomeService } from '@app/services/home.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import defaultImage1 from '../../../assets/images/wheretogo/cities.png';
import defaultImage2 from '../../../assets/images/wheretogo/beaches.png';
import defaultImage3 from '../../../assets/images/wheretogo/deserts.png';
import defaultImage4 from '../../../assets/images/wheretogo/religioussites.png';
import defaultImage5 from '../../../assets/images/wheretogo/historicalplaces.png';
import defaultImage6 from '../../../assets/images/wheretogo/cities.png';
import { Shell } from '@app/shell/shell.service';

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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  defaultImg = defaultImage3;
  p: number = 1;
  category: any;
  categories: any = [];
  locations: any;
  isLoading: boolean;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrows: true,
    infinite: false,
    responsive: responsiveSettings,
  };
  images = [defaultImage1, defaultImage2, defaultImage3, defaultImage4, defaultImage5, defaultImage6];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly shellService: Shell,
    private readonly eventService: EventService,
    private readonly homeService: HomeService
  ) {
    this.route.params.subscribe((res: any) => {
      this.category = this.route.snapshot.data.category;
    });
  }

  getLocations() {
    this.eventService
      .getActivityLocations(this.category._id)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((locations: any) => {
        this.locations = locations.slice(0, 6);
        this.locations.filter((location: any) => {
          if (!location.thumbnail) {
            // location.thumbnail = defaultImage;
          }
        });
      });
  }
  getFilters() {
    // debugger
    this.shellService.currentMessage.subscribe((data: any) => {
      this.categories = data.activities;
      console.log('this.categories', this.categories);
    });
  }
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //  this.loadScript();
    this.getLocations();
    this.getFilters();
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
