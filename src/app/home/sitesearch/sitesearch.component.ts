import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './sitesearch.component.html',
  styleUrls: ['./sitesearch.component.scss'],
})
export class SitesearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
