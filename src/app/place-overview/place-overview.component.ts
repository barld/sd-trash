import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place, TrashEmptying } from '../logic/places';

import { switchMap } from 'rxjs/operators';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place-overview',
  templateUrl: './place-overview.component.html',
  styleUrls: ['./place-overview.component.css']
})
export class PlaceOverviewComponent implements OnInit {
  place: Place;
  emptyings: {date: Date, emtying: TrashEmptying}[] = [];

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => this.placeService.getPlaceByPlaceSelector(params['place'])),
        switchMap(place => {
          this.place = place;
          this.placeService.activePlace = place;
          return this.placeService.getNextNTrashEmptys(3, place);
        })
      ).subscribe(
        emptyings => this.emptyings = emptyings
      );
  }

}
