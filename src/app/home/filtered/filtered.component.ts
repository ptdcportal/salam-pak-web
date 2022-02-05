import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
})
export class FilteredComponent implements OnInit {
  @Input() title: string;
  @Input() singleFilter: Array<any>;
  @Input() images: Array<any>;
  @Input() isWhereToGo: boolean;
  redirectUrl: string;
  constructor(private router: Router) {
    if (this.isWhereToGo) {
      // this.redirectUrl = `what-to-do/${}`
    }
  }

  ngOnInit(): void {}

  navigate = (single: any) => {
    var url =
      single.type === 'activity' ? `/what-to-do/activity/${single.slug}` : `/where-to-go/category/${single.slug}`;
    this.router.navigate([url]);
  };
}
