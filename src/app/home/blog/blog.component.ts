import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  blogUrl: string | null = environment.blogUrl;
  blogs: any;
  slideConfig = {
    slidesToShow: 3.0,
    slidesToScroll: 3.0,
    infinite: false,
    nextArrow:
      "<img class='next-slidee' src='assets/images/icons/right-arrow-white.svg' style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -30px;font-size: 20px !important; padding:10px; '/>",
    // style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -30px;font-size: 20px !important; padding:10px '
    prevArrow:
      "<img class='prev-slidee' src='assets/images/icons/left-arrow-white.svg' style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font-size: 20px !important; left:-45px ; padding:10px; '/>",
    // style='width: 40px;z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font-size: 20px !important; left:-45px ; padding:10px '
    // "<div class='nav-btn prev-slide icon-arrow-left'></div>",
    // nextArrow:
    //   "<div class='nav-btn next-slide icon-arrow-right'  style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; color: #fff; border: 2px solid #8CC63E; position: absolute;top: 50%;right: -30px;font- size: 20px !important; padding:10px '></div>",
    // prevArrow:
    //   "<div class='nav-btn prev-slide icon-arrow-left' style='z-index:1000; opacity:0.7; border-radius: 50%; background-color: #8CC63E; border: 2px solid #8CC63E !important; color:#fff !important; position:absolute;top:50%; font- size: 20px !important; left:-45px ; padding:10px '></div>",

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
  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.homeService.getBlogs().subscribe((blogs: any) => {
      if (blogs) {
        this.blogs = blogs.length > 6 ? blogs.slice(0, 6) : blogs;
      }
      console.log('Fetched blogs: ', this.blogs);
    });
  }
}
