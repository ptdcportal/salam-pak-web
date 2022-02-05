import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbPaginationModule, NgbAlertModule, NgbTypeaheadModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { VendorSectionComponent } from './vendor-section/vendor-section.component';

@NgModule({
  declarations: [AuthModalComponent, VendorSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SlickCarouselModule,
    TextMaskModule,
    // ShareIconsModule,
    // ShareButtonsModule,
    NgbTypeaheadModule,
    NgbModule,
    SortableModule.forRoot(),
    // ToastrModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SlickCarouselModule,
    TextMaskModule,
    VendorSectionComponent,
    // ShareIconsModule,
    // ShareButtonsModule,
    NgbTypeaheadModule,
    ToastrModule,
    NgxSmartModalModule,
  ],
  providers: [],
})
export class PTDCCommonModule {}
