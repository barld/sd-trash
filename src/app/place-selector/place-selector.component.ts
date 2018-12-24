import { Component, OnInit } from '@angular/core';
import { Place } from '../logic/places';
import { Observable } from 'rxjs';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html',
  styleUrls: ['./place-selector.component.css']
})
export class PlaceSelectorComponent implements OnInit {

  get selectedPlace() {
    return this.placeService.activePlace;
  }
  set selectedPlace(value) {
    this.router.navigate(['place', value.selectionName]);
  }


  placeStream: Observable<Place[]>;

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.placeStream = this.placeService.getPlaces();
  }

}
