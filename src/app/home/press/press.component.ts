import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
})
export class PressComponent implements OnInit {
  pressReleases: any = [];
  show = false;
  selectedId: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.getPressRelease();
  }

  getPressRelease = () => {
    this.eventService.getPressRelease().subscribe((data: any) => {
      this.pressReleases = data.data;
      // console.log('Data for press relaase: ', this.pressReleases);
      if (this.pressReleases.length > 0) {
        this.pressReleases.forEach((item: any) => {
          item['show'] = false;
        });
      }
    });
  };

  toggleShowMore = (id: any) => {
    this.show = !this.show;
    this.selectedId = this.show ? id : '';
    var res = this.pressReleases.filter((i: any) => {
      return i._id === id;
    });
    res[0].show = !res[0].show;
  };
}
