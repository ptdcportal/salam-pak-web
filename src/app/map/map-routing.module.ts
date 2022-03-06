import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapResolveService } from '../services/resolver-services/map-resolve.service';
import { MapComponent } from './map.component';
import { ThreeDMapComponent } from './three-d-map/three-d-map.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  { path: 'cities/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  { path: 'what-to-do/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  { path: 'where-to-go/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  { path: '3d-map', component: ThreeDMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
