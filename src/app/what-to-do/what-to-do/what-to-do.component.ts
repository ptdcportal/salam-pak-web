import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import defaultImage1 from '../../../assets/images/whattodo/list1.png';
import defaultImage2 from '../../../assets/images/whattodo/list2.png';
import defaultImage3 from '../../../assets/images/whattodo/list3.png';
import defaultImage4 from '../../../assets/images/whattodo/shopping.png';
import defaultImage5 from '../../../assets/images/whattodo/spa.png';
import defaultImage6 from '../../../assets/images/whattodo/hotel.png';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-what-to-do',
  templateUrl: './what-to-do.component.html',
  styleUrls: ['./what-to-do.component.scss'],
})
export class WhatToDoComponent implements OnInit {
  activities: any = [];
  isLoading = true;
  images = [defaultImage1, defaultImage2, defaultImage3, defaultImage4, defaultImage5, defaultImage6];
  constructor(private readonly homeService: HomeService, private readonly router: Router) {}
  getActivities() {
    let params = `isFeatured=true&pageSize=6`;
    this.homeService
      .getActivities(params)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((activities: any) => {
        this.activities = activities;
        // console.log('**************" ', this.activities);
        // this.activities.filter((activity: any, index: number) => {
        //   // activity.thumbnail = this.images[index];
        // });
      });
  }
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.loadScript();
    this.getActivities();
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
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
  // navigate = (url: any) => {
  //   url = url.slice(1);
  //   this.router.navigate(['what-to-do', url]);
  //   debugger;
  // }
}
