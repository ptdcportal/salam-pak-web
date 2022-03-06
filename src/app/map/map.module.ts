import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

import { AgmCoreModule } from '@agm/core';
import { ThreeDMapComponent } from './three-d-map/three-d-map.component';

@NgModule({
  declarations: [MapComponent, ThreeDMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA',
    }),
  ],
})
export class MapModule {}
