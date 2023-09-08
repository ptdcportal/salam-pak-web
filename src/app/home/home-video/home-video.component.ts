import { WindowRef } from '@agm/core/lib/utils/browser-globals';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.scss'],
})
export class HomeVideoComponent implements OnInit {
  playButton: any = true;

  @ViewChild('homeVideo') homeVideo: ElementRef;
  constructor(public ngxSmartModalService: NgxSmartModalService) {}
  //homeVideo
  ngOnInit(): void {}

  toggleVideo = () => {
    this.playButton = !this.playButton;

    if (this.homeVideo.nativeElement.paused)
      this.homeVideo.nativeElement.play();
    else this.homeVideo.nativeElement.pause();
  };

  openModal = () => {
    this.ngxSmartModalService.getModal('videoModal').open();
  };
}
