import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-booking-module-listing',
  templateUrl: './booking-module-listing.component.html',
  styleUrls: ['./booking-module-listing.component.scss']
})
export class BookingModuleListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  downloadPdf(pdfUrl: string, pdfName: string) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
