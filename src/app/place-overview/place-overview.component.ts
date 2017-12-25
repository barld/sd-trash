import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceOverviewService } from './place-overview.service';
import { Place, TrashEmptying } from '../logic/places';

import { switchMap } from 'rxjs/operators';

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
    private placeOverviewService: PlaceOverviewService
  ) { }

  ngOnInit() {
    const placeSelector = this.route.snapshot.paramMap.get('place');
    this.placeOverviewService.getPlaceByPlaceSelector(placeSelector)
      .pipe(
        switchMap(place => {
          this.place = place;
          return this.placeOverviewService.getNextNTrashEmptys(3, place);
        })
      ).subscribe(
        emptyings => this.emptyings = emptyings
      );
  }

}
