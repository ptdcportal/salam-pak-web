import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { CredentialsService } from '../auth/credentials.service';

// import * from 'googlemaps';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit, AfterContentChecked {
  planningForm!: FormGroup;
  plan: any;
  planItems: any = [];
  locMarkers: any = [];
  cond: boolean = true;
  planId: any;

  userPlanItems: any = [];

  showPlan: true;

  minDateFrom: any;
  minDateTo: any;

  enableSaveButton: boolean = true;

  constructor(
    private readonly eventService: EventService,
    private readonly credentialsService: CredentialsService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.plan = this.route.snapshot.data.planDetails;
    this.planItems = this.route.snapshot.data.planDetails.locations;
    this.planId = this.route.snapshot.data.planDetails._id;
  }

  ngAfterContentChecked() {
    // condition is for executing bleow code only once
    // if (this.cond == true) {
    //   this.planInfo = this.plan[1];
    //   this.userPlanItems = this.plan[0];
    //   if (this.planInfo) {
    //     this.locMarkers = this.planInfo;
    //     //calculate distance with initial planInfo objects..
    //     this.calculateDistance(this.planInfo);
    //   }
    //   this.cond = this.planInfo?.length > 0 ? false : true;
    // }
    // console.log('plans: ', this.userPlanItems);
  }

  getUserPlan() {
    //  - gets the locations which user has added to plan...
    // if (this.credentialsService.isAuthenticated()) {
    //   this.eventService.getUserPlan(localStorage.getItem('userId')).subscribe((plan) => {
    //     for (const prop in plan) {
    //       if (Object.prototype.hasOwnProperty.call(plan, prop)) {
    //         if (plan[prop].length > 0) {
    //           this.plan.push(plan[prop]);
    //         }
    //       }
    //     }
    //   });
    // }
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
    // this.loadMainScript();
    this.createForm();
    this.planningForm.get('duration').setValue(this.plan.duration);
    this.dateForm.valueChanges.subscribe((value: any) => {
      if (value.fromDate || value.toDate) {
        const dateB = moment(new Date(value.fromDate));
        const dateC = moment(new Date(value.toDate));
        var result = dateC.diff(dateB, 'days');
        this.planningForm.get('duration').setValue(result);
      }
      this.enableSaveButton = false;
    });

    this.planItems.forEach((item: any) => {
      item['type'] = 'location';
    });
  }

  private createForm() {
    this.planningForm = this.formBuilder.group({
      duration: [''],
      dates: this.InitializeDatesForm(),
    });
  }

  private InitializeDatesForm() {
    this.minDateFrom = moment(this.plan.startDate).format('YYYY-MM-DD');
    this.minDateTo = moment(this.plan.endDate).format('YYYY-MM-DD');
    const dates = {
      fromDate: [moment(this.plan.startDate).format('YYYY-MM-DD'), Validators.required],
      toDate: [moment(this.plan.endDate).format('YYYY-MM-DD'), Validators.required],
    };
    return this.formBuilder.group(dates);
  }

  get dateForm() {
    return this.planningForm.get('dates');
  }

  get fromDate() {
    return this.dateForm.get('fromDate');
  }

  get toDate() {
    return this.dateForm.get('toDate');
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

  calculateDistance(localArray: any) {
    if (localArray.length > 1) {
      // - iterates over each object of localArray
      // - calculates distance between every two locations in localArray i.e: i & i + 1
      // - assign 'calculatedDistance' key to every object with calculated distance (except the last object)...
      for (var i = 0; i < localArray.length - 1; i++) {
        // let self = this;
        // const source = new google.maps.LatLng(
        //   localArray[i].location.coordinates[0],
        //   localArray[i].location.coordinates[1]
        // );
        // const dest = new google.maps.LatLng(
        //   localArray[i + 1].location.coordinates[0],
        //   localArray[i + 1].location.coordinates[1]
        // );
        // const distance = google.maps.geometry.spherical.computeDistanceBetween(source, dest);
        // this.planInfo[i]['calculatedDistance'] = (distance / 1000).toFixed(1) + ' KM';

        var R = 6371; // km
        var dLat = this.toRad(localArray[i + 1]?.location?.coordinates[0] - localArray[i]?.location?.coordinates[0]);
        var dLon = this.toRad(localArray[i + 1]?.location.coordinates[1] - localArray[i].location.coordinates[1]);
        var lat1 = this.toRad(localArray[i].location.coordinates[0]);
        var lat2 = this.toRad(localArray[i + 1].location.coordinates[0]);

        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        this.planItems[i]['calculatedDistance'] = d.toFixed(1) + ' KM';
        // console.log('PlanIfo', this.planInfo)
      }

      // - checks if the last object conatins the key 'calculatedDistance'
      // - if it's present then removes the key...
      var hasKey = 'calculatedDistance' in localArray[localArray.length - 1];
      if (hasKey) {
        localArray[localArray.length - 1].calculatedDistance = '';
      }
    }
  }

  toRad(Value: any) {
    return (Value * Math.PI) / 180;
  }

  // returns updated planObject when user drags the locations...
  dataChanged(event: any) {
    this.calculateDistance(event);

    // change the center of map with respect to updated object event...
    this.locMarkers = event;
  }

  showPlanBody = () => {
    this.showPlan = true;
  };

  removeItem(item: any) {
    if (item.type == 'location') {
      const params: any = {
        locations: item._id,
      };
      this.removeItemFromPlan(this.planId, params);
    } else if (item.type == 'accommodation') {
      const params: any = {
        accommodations: item._id,
      };
      this.removeItemFromPlan(this.planId, params);
    } else if (item.type == 'trip') {
      const params: any = {
        trips: item._id,
      };
      this.removeItemFromPlan(this.planId, params);
    }
  }

  removeItemFromPlan(planId: any, params: any) {
    this.eventService.deleteItemFromPlan(planId, params).subscribe((res: any) => {
      this.planItems = this.planItems.filter((i: any) => {
        return i._id !== params[Object.keys(params)[0]];
      });
      this.toastr.success('Successfully removed from plan');
    });
  }

  savePlan() {
    var obj = {
      duration: this.planningForm.get('duration').value,
      startDate: this.planningForm.value.dates.fromDate,
      endDate: this.planningForm.value.dates.toDate,
    };
    this.eventService.addLocationToSelectedPlan(this.planId, obj).subscribe((res: any) => {
      this.toastr.success('plan updated successfully!');
    });
  }
}
