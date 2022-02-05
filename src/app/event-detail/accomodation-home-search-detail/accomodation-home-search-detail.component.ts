import { Component, OnInit, ViewChild } from '@angular/core';
import { Shell } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-accomodation-home-search-detail',
  templateUrl: './accomodation-home-search-detail.component.html',
  styleUrls: ['./accomodation-home-search-detail.component.scss'],
})
export class AccomodationHomeSearchDetailComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  filter: any;
  slug: any;
  slideConfig = {
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrows: true,
  };
  featuredEvents: any = [];
  allEvents: any = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private readonly shellService: Shell
  ) {
    this.slug = this.route.snapshot.params.slug;

    if (this.slug) {
      this.eventService.getAccomodationEvents(this.slug).subscribe((data: any) => {
        // console.log('data', data.data);
        this.allEvents = data.data;
        if (data) {
          data.data.filter((i: any) => {
            if (i.isFeatured) {
              this.featuredEvents.push(i);
            }
          });
        }
      });
    }
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
    this.shellService.currentMessage.subscribe((filters) => {
      this.filter = filters;
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
}
