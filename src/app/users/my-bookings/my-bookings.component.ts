import { Component, OnInit } from '@angular/core';
// import { reverse } from 'dns';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  reviews: any = [];
  myBookings: any = [];
  userId: any;

  constructor(private readonly userService: UserService) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    const queryString = Object.keys(this.params)
      .map((key) => `${key}=${this.params[key]}`)
      .join('&');

    this.getUserBookings(queryString);
  }

  get params() {
    return {
      pageSize: 0,
      skip: 0,
      userId: `${this.userId}`,
      // type: 'eventsBooking',
      status: 'new',
    };
  }

  getUserBookings(params: any) {
    this.userService.getUserBookings(params).subscribe((res: any) => {
      // console.log(res);
      this.myBookings = res;
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
