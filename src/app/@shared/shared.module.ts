import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherWidgetComponent } from '../home/weather-widget/weather-widget.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgxSmartModalModule, FormsModule, FontAwesomeModule],
  declarations: [LoaderComponent, WeatherWidgetComponent],
  exports: [LoaderComponent, WeatherWidgetComponent],
  providers: [],
})
export class SharedModule {}
