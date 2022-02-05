import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fall-trips',
  templateUrl: './fall-trips.component.html',
  styleUrls: ['./fall-trips.component.scss'],
})
export class FallTripsComponent implements OnInit {
  constructor() {}

  imagesSection = [
    { index: 0, Imgsection: true },
    { index: 1, Imgsection: false },
    { index: 2, Imgsection: false },
    { index: 3, Imgsection: false },
  ];

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
    this.loadMainScript();
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
  public loadMainScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/js/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  closeSection = (num: any) => {
    var itemToShow = this.imagesSection.filter((i: any) => {
      if (i.index == num) {
        i.Imgsection = true;
        return true;
      } else {
        i.Imgsection = false;
        return false;
      }
    });
    //  itemToShow[0].Imgsection = !itemToShow[0].Imgsection;
    //  debugger;
  };
}
