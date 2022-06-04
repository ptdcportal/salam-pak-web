import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import defaultImage1 from '../../../assets/images/wheretogo/cities.png';
import { Shell } from '@app/shell/shell.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@ViewChild('slickComponent')
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  public slickComponent: any;
  trip: any;
  locations: any = [];
  province: any;

  featured: any = [];

  p: number = 1;
  q: number = 1;

  slideConfig = {
    slidesToShow: 4.0, // 4.5
    slidesToScroll: 1,
    nextArrow:
      "<img class='icon-arrow-right' src='assets/images/icons/right-arrow-white.svg' style='width: 40px; z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -35px;font-size: 20px !important; padding:10px' />",
    prevArrow:
      "<img class='icon-arrow-left' src='assets/images/icons/left-arrow-white.svg' style='width: 40px; z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font-size: 20px !important; left:-45px ; padding:10px;' />",
    // nextArrow:
    //   "<div class='nav-btn  icon-arrow-right'  style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: 13px;font- size: 20px !important; padding:10px '></div>",
    // prevArrow:
    //   "<div class='nav-btn  icon-arrow-left' style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font- size: 20px !important; left:7px ; padding:10px '></div>",
    //  dots: true,
    // arrows: true,
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

  slug = '';
  image = defaultImage1;
  provinceImage: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private readonly shellService: Shell
  ) {
    this.route.data.subscribe((res: any) => {
      this.locations = res.trip;
      this.extractFeaturedItems(this.locations);
    });
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.route.params.subscribe((data: any) => {
      this.trip = this.route.snapshot.data.trip[0];
      this.slug = data.slug;
    });
  }

  getProvinces() {
    this.shellService.getProvinces().subscribe((data: any) => {
      console.log(data);
      this.province = data.data.filter((res: any) => {
        if (res.slug === this.trip.parentProvince) {
          this.province = res;
          this.provinceImage = this.province.thumbnail;
        }
      });
    });
  }

  getFeaturedEvents() {
    this.eventService.getFetrauredEvents(this.trip.parentProvince).subscribe((data: any) => {
      this.locations = data.data;
      this.extractFeaturedItems(this.locations);
    });
  }

  next() {
    this.slickComponent.slickNext();
  }

  prev() {
    this.slickComponent.slickPrev();
  }
  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }

  extractFeaturedItems(data: any) {
    this.featured = data.filter((item: any) => item.isFeatured);
  }
}
