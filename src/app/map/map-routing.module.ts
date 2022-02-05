import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapResolveService } from '../services/resolver-services/map-resolve.service';
import { MapComponent } from './map.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  { path: 'cities/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  { path: 'what-to-do/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  { path: 'where-to-go/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
