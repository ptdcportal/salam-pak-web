import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { PTDCCommonModule } from '@app/common/common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, PTDCCommonModule, RouterModule],
  exports: [CardComponent],
})
export class CardModule {}
