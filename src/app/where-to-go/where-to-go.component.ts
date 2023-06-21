import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';
import { finalize } from 'rxjs/internal/operators/finalize';
import defaultImage1 from '../../assets/images/wheretogo/cities.png';
import defaultImage2 from '../../assets/images/wheretogo/beaches.png';
import defaultImage3 from '../../assets/images/wheretogo/deserts.png';
import defaultImage4 from '../../assets/images/wheretogo/religioussites.png';
import defaultImage5 from '../../assets/images/wheretogo/historicalplaces.png';
import defaultImage6 from '../../assets/images/wheretogo/cities.png';
import { Router } from '@angular/router';
@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styleUrls: ['./where-to-go.component.scss'],
})
export class WhereToGoComponent implements OnInit {
  isLoading = true;
  categories: any = [];
  thumbnails: any = [];
  images = [defaultImage1, defaultImage2, defaultImage3, defaultImage4, defaultImage5, defaultImage6];
  constructor(private readonly homeService: HomeService, private readonly router: Router) {}

  getWhereToGoCategories() {
    this.homeService.getWhereToGoCategories().then((categories: any) => {
        this.categories = categories;
        this.isLoading = false;
        console.log(this.categories);
        // debugger;
        this.categories.filter((category: any, index: number) => {
          //   if (!category.thumbnail) {
          // category.thumbnail = this.images[index];
          //   }
        });
      });
  }
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
    this.loadScript();
    this.getWhereToGoCategories();
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
}
