import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  media: any = [];
  showImgs: boolean;
  localImageArray: any;
  error: boolean;
  constructor(private eventService: EventService, public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.getMedia();
  }

  getMedia = () => {
    this.eventService.getMedia().subscribe(
      (data: any) => {
        this.media = data.data;
      },
      (err) => {
        // console.log('Error: ', err);
        this.error = true;
      }
    );
  };

  showCarousel = (index: any) => {
    this.showImgs = true;

    this.localImageArray = this.media.map((val: any) => {
      return val.thumbnail;
    });

    const tempFirstImg = this.localImageArray[0];
    this.localImageArray[0] = this.localImageArray[index];
    this.localImageArray[index] = tempFirstImg;

    this.ngxSmartModalService.getModal('carouselModal').open();
  };

  hideCarousel() {
    this.showImgs = false;
  }
}
