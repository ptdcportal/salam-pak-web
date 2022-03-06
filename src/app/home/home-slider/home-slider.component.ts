import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
  @ViewChild('homeslider') homeSliderVideo: ElementRef;
  constructor(private homeService: HomeService) {}

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
  };

  show: boolean;

  ngOnInit(): void {
    this.homeService.countryMessage.subscribe((data: any) => {
      this.show = data.country == 'Pakistan' ? false : true;
    });
  }

  ngAfterViewInit(): void {
    // this.homeSliderVideo.nativeElement.play();
  }
}
