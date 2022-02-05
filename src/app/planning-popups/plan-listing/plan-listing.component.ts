import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';

import { CreatePlanComponent } from '../create-plan/create-plan.component';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

import { EventService } from '../../services/event.service';
import { CredentialsService } from '@app/auth';

import * as moment from 'moment';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-listing',
  templateUrl: './plan-listing.component.html',
  styleUrls: ['./plan-listing.component.scss'],
})
export class PlanListingComponent implements OnInit {
  selectedPlanId: any;
  userId: any;
  userPlans: any;
  locationToBeAdded: any;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private eventService: EventService,
    private credentialsService: CredentialsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userPlans = this.ngxSmartModalService.create('planListingModal', PlanListingComponent).getData();
    console.log(this.userPlans);
  }

  selectedPlan(plan: any) {
    this.selectedPlanId = plan._id;
    var obj = {
      locations: this.userPlans.locations[0],
    };
    this.addLocationToSelectedPlan(this.selectedPlanId, obj);
  }

  openCreatePlanModal() {
    // this.ngxSmartModalService.getModal('planListingModal').close();
    // this.ngxSmartModalService.removeModal('planListingModal');
    // // this.ngxSmartModalService.close('createPlanModal');
    // console.log(this.ngxSmartModalService.getOpenedModals());
    const modal = this.ngxSmartModalService
      .create('createPlanModal', CreatePlanComponent, { customClass: 'snowClass' })
      .setData({ locations: this.userPlans.locations });
    modal.open();
  }

  addLocationToSelectedPlan(planId: any, obj: any) {
    // console.log('location added to selected plan!', { locations: this.userPlans.locations }, this.selectedPlanId);
    this.ngxSmartModalService.getModal('planListingModal').close();
    this.eventService.addLocationToSelectedPlan(planId, obj).subscribe((res: any) => {
      this.toastr.success('location added to selected plan');
    });
  }
}
