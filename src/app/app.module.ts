import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { PlaceSelectorComponent } from './place-selector/place-selector.component';
import { PlaceSelectorService } from './place-selector/place-selector.service';
import { AppRoutingModule } from './/app-routing.module';
import { PlaceOverviewComponent } from './place-overview/place-overview.component';
import { PlaceOverviewService } from './place-overview/place-overview.service';


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
    MatExpansionModule,
    MatListModule,
    MatIconModule,

    // routing as last
    AppRoutingModule,
  ],
  providers: [PlaceSelectorService, PlaceOverviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
