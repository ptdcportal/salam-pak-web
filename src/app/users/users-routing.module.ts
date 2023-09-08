import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewFeedbackComponent } from './review-feedback/review-feedback.component';
import { TravelItineraryComponent } from './travel-itinerary/travel-itinerary.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'itinerary', component: TravelItineraryComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'reviews', component: ReviewFeedbackComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
