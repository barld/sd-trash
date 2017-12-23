import { TestBed, inject } from '@angular/core/testing';

import { PlaceSelectorService } from './place-selector.service';

describe('PlaceSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceSelectorService]
    });
  });

  it('should be created', inject([PlaceSelectorService], (service: PlaceSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
