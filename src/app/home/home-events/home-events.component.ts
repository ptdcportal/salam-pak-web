import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl, MaxLengthValidator } from '@angular/forms';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import * as moment from 'moment';
import { BsDatepickerDirective, DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker';
import { EventService } from '@app/services/event.service';

const responsiveSettings = [
  {
    breakpoint: 1920,
    settings: {
      slidesToShow: 1,
      infinite: false,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1.0,
      infinite: true,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2.0,
      infinite: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      infinite: true,
    },
  },
];

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss'],
})
export class HomeEventsComponent implements OnInit, AfterViewInit {
  dateCustomClasses: DatepickerDateCustomClasses[];

  slideConfig = {
    slidesToShow: 1.0,
    slidesToScroll: 1,
    arrows: true,
    responsive: responsiveSettings,
  };

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  // maxDate = new Date();

  minDate: any;
  maxDate: any;

  dateVal: any = '';

  show: any = false;

  form: FormGroup;
  date: string;
  title: any;
  imagePath: any;
  description: any;
  city: any;
  events: any = [];
  p: number = 1;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    public ngxSmartModalService: NgxSmartModalService,
    private fb: FormBuilder,
    private readonly eventService: EventService
  ) {
    const now = new Date();
    this.minDate = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    this.maxDate = oneYearFromNow;
  }

  @ViewChildren(BsDatepickerDirective) datepicker: QueryList<BsDatepickerDirective>;

  ngOnInit(): void {
    // this.initForm();
    // this.dateChanged(moment(this.form.value.date).format('YYYY-MM-DD'));
    // this.form.valueChanges.subscribe((x) => {
    //   this.dateChanged(moment(this.form.value.date).format('YYYY-MM-DD'));
    // });
    // this.autoOpen();
    // console.log(this.bsInlineValue);
    // debugger;
  }

  ngAfterViewInit(): void {}

  // initForm() {
  //   this.form = this.fb.group({
  //     date: [this.minDate, Validators.required],
  //   });
  // }

  getEvent = (selectedDate: any) => {
    // console.log('initial date: ', moment(this.form.value.date).format('YYYY-MM-DD'));
    this.homeService.getEvents(selectedDate).then((res: any) => {
      this.events = res;
    });
  };

  showMoreContent() {
    this.show = !this.show;
  }

  dateChanged(selectedDate: any) {
    // this.date = moment(this.form.value.date).format('YYYY-MM-DD');
    // console.log('date: ', this.date);
    // // this.autoOpen();
    // this.getEvent(selectedDate);
  }

  // autoOpen(): any {
  //   // this.datepicker.last.show();
  //   setTimeout(() => {
  //     this.datepicker?.last?.show();
  //     console.log('time called');
  //   }, 200);
  // }

  dateChnaged(e: any) {
    //  console.log(moment(e).format('YYYY-MM-DD'));
    //  this.dateChanged(moment(e).format('YYYY-MM-DD'));
    this.homeService.getEvents(moment(e).format('YYYY-MM-DD')).then((res: any) => {
      if (res.length) {
        this.events = res;
        this.generateDateClass(this.events);
      } else {
        this.getAllEvents();
      }
    });
  }

  getAllEvents() {
    this.eventService.getAllEvents().then(
      (res: any) => {
        this.events.length = 0;
        this.events = res.data;
        this.dateCustomClasses = this.generateDateClass(this.events);
      },
      (err) => {}
    );
    // console.log(new Date(1657182360000));
  }

  generateDateClass(data: any) {
    return data.map((item: any) => {
      return {
        date: new Date(item.startDate),
        classes: ['dateCustomClasses'],
      };
    });
  }
}
