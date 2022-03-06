import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-listing',
  templateUrl: './plan-listing.component.html',
  styleUrls: ['./plan-listing.component.scss'],
})
export class PlanListingComponent implements OnInit {
  userId: any;
  userPlans: any = [];

  constructor(private readonly eventService: EventService, private toastr: ToastrService) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.loadScript();
    this.fetchUserPlans();
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

  fetchUserPlans() {
    this.eventService.getUserPlan(this.userId).subscribe((res: any) => {
      // console.log(res);
      this.userPlans = res;
    });
  }

  deleteAPlan(planId: any) {
    this.eventService.deleteAPlan(planId).subscribe((res: any) => {
      this.toastr.success('Plan has been removed');
      this.fetchUserPlans();
      // console.log(res);
    });
  }
}
