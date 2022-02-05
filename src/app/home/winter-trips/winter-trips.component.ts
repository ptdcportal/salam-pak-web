import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter-trips',
  templateUrl: './winter-trips.component.html',
  styleUrls: ['./winter-trips.component.scss'],
})
export class WinterTripsComponent implements OnInit {
  constructor() {}

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
}
