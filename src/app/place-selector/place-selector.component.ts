import { Component, OnInit } from '@angular/core';
import { Place } from '../logic/places';
import { Observable } from 'rxjs/Observable';
import { PlaceSelectorService } from './place-selector.service';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html',
  styleUrls: ['./place-selector.component.css']
})
export class PlaceSelectorComponent implements OnInit {

  selectedPlace: Place;
  placeStream: Observable<Place[]>;

  constructor(
    private placeSelectorService: PlaceSelectorService
  ) { }

  ngOnInit() {
    this.placeStream = this.placeSelectorService.getPlaces();
  }

}
