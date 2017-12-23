import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Place, places } from '../logic/places';

@Injectable()
export class PlaceSelectorService {

  constructor() { }

  public getPlaces(): Observable<Place[]> {
    return new Observable(subscriber => subscriber.next(places));
  }

}
