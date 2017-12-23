import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOverviewComponent } from './place-overview/place-overview.component';

const routes: Routes = [
   { path: 'place/:place', component: PlaceOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

