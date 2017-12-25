import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { PlaceSelectorComponent } from './place-selector/place-selector.component';
import { PlaceSelectorService } from './place-selector/place-selector.service';
import { AppRoutingModule } from './/app-routing.module';
import { PlaceOverviewComponent } from './place-overview/place-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceSelectorComponent,
    PlaceOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // material modules
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,

    // routing as last
    AppRoutingModule,
  ],
  providers: [PlaceSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
