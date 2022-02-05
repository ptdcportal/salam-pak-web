import { AfterContentChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterContentChecked {
  accommodations: any = [];

  constructor() {}

  @Input() accomodationCategories: any;
  @Input() showBrowseButton: any;
  @Input() showStars: any;

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    //  console.log(this.showStars);
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }
}
