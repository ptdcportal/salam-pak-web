import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import * as moment from 'moment';

import { EventService } from '../../services/event.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
})
export class CreatePlanComponent implements OnInit, AfterViewInit {
  planForm!: FormGroup;
  locationId: any;
  planData: any;

  userId: any;

  minDateForCheckIn: any;
  minDateForCheckOut: any;

  constructor(
    private formBuilder: FormBuilder,
    public ngxSmartModalService: NgxSmartModalService,
    private readonly eventService: EventService,
    private toastr: ToastrService
  ) {
    this.userId = localStorage.getItem('userId');
    this.minDateForCheckIn = moment(new Date()).format('YYYY-MM-DD');
    this.minDateForCheckOut = moment(new Date()).format('YYYY-MM-DD');
    this.ngxSmartModalService.closeAll();
  }

  ngOnInit(): void {
    // this.ngxSmartModalService.removeModal('authModal');
    // this.ngxSmartModalService.removeModal('createPlanModal');
    this.ngxSmartModalService.removeModal('carouselModal');
    this.ngxSmartModalService.removeModal('feedbackModal');
    console.log('crate plan modal stack: ', this.ngxSmartModalService.getModalStack());
    this.createPlanForm();
    this.planForm.valueChanges.subscribe((value: any) => {
      if (value.startDate && value.endDate) {
        const dateB = moment(new Date(value.startDate));
        const dateC = moment(new Date(value.endDate));
        var result = dateC.diff(dateB, 'days');
        this.planForm.get('duration').setValue(result);
      }
    });

    this.planForm.valueChanges.subscribe((value: any) => {
      this.minDateForCheckOut = moment(value.startDate).format('YYYY-MM-DD');
    });
  }

  ngAfterViewInit(): void {
    if (this.ngxSmartModalService.getModal('createPlanModal').getData() !== undefined) {
      this.planData = this.ngxSmartModalService.getModal('createPlanModal').getData();
    } else {
    }
  }

  createPlanForm() {
    this.planForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: ['', Validators.required],
      duration: [''],
    });
  }

  caretePlan() {
    // console.log('Plan saved!', { ...this.planForm.value, ...this.planData });
    this.eventService
      .createUserPlan(this.userId, { ...this.planForm.value, ...this.planData })
      .subscribe((res: any) => {
        this.ngxSmartModalService.getModal('createPlanModal').close();
        console.log(res);
        this.toastr.success('Plan created successfully!');
      });
  }
}
