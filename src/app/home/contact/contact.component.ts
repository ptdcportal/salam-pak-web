import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { EventService } from '../../services/event.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private readonly eventService: EventService,
    private toastr: ToastrService
  ) {}

  isSubmitted: boolean;
  phoneMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  userData: any;

  userFeedback = {
    firstName: '',
    lastName: '',
    email: '',
    rating: 5,
    description: '',
    locationId: '',
    title: '',
    phone: '',
  };

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  giveFeedback() {
    this.userFeedback.firstName;
    this.userFeedback.lastName;
    this.userFeedback.email;
    // this.userFeedback.locationId = this.eventId;
    // this.userFeedback.rating = '5';
    this.userFeedback.phone;
    this.userFeedback.description;

    this.eventService.userFeedback(this.userFeedback).subscribe(
      (res: any) => {
        this.toastr.success('Submitted Successfully!');
      },
      (err: any) => {
        console.log(err.error.error.message);
        this.toastr.error(err.error.error.message);
      }
    );
  }
}
