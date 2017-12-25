import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Place, places, TrashEmptying } from '../logic/places';

import { of } from 'rxjs/observable/of';

import '../logic/weekNumbers';

@Injectable()
export class PlaceOverviewService {

  constructor() { }

  getPlaceByPlaceSelector(place_selector: string): Observable<Place> {
    return of(places.find(place => place.selectionName === place_selector));
  }

  getNextNTrashEmptys(n: number, place: Place) {
    const today = new Date();
    let emptyings: {date: Date, emtying: TrashEmptying}[] = [];

    for (let i = 0; emptyings.length < n; i++) {
      const d = new Date(today.getTime());
      d.setDate(d.getDate() + i);
      const empt = this.getTrashEmpty(d, place);
      if (empt) {
        emptyings = [...emptyings, {date: d, emtying: empt}];
      }
    }

    return of(emptyings);
  }

  private getTrashEmpty(date: Date, place: Place) {
    const weekNumber = date.getWeek();
    const evenWeek = weekNumber % 2;
    const dayOfWeek = date.getDay();
    return place.emptyings.find(em => em.week === evenWeek && em.dayOfWeek === dayOfWeek);
  }

}
