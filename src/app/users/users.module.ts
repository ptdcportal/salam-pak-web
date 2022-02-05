import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewFeedbackComponent } from './review-feedback/review-feedback.component';
import { TravelItineraryComponent } from './travel-itinerary/travel-itinerary.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PTDCCommonModule } from '@app/common/common.module';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ProfileComponent,
    ReviewFeedbackComponent,
    TravelItineraryComponent,
    WishlistComponent,
    UserSidebarComponent,
    MyBookingsComponent,
  ],
  imports: [CommonModule, PTDCCommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [ProfileComponent],
})
export class UsersModule {}
