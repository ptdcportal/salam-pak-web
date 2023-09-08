import { Component, OnInit } from '@angular/core';
// import { reverse } from 'dns';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-review-feedback',
  templateUrl: './review-feedback.component.html',
  styleUrls: ['./review-feedback.component.scss'],
})
export class ReviewFeedbackComponent implements OnInit {
  reviews: any = [];
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.getUserReviews();
  }

  getUserReviews() {
    this.userService
      .getUserReviews(localStorage.getItem('userId'))
      .subscribe((data: any) => {
        this.reviews = data;
      });
  }

  getRatingStars(rating?: any): string {
    // Get the value
    const val = parseFloat(rating);
    // Turn value into number/100
    const size = (val / 5) * 100;

    return size + '%';
  }
}
