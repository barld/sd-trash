import { TestBed, inject } from '@angular/core/testing';

import { PlaceOverviewService } from './place-overview.service';

describe('PlaceOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceOverviewService]
    });
  });

  it('should be created', inject([PlaceOverviewService], (service: PlaceOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
