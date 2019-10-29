import { TestBed } from '@angular/core/testing';

import { ShareSelectedVehiclesService } from './share-selected-vehicles.service';

describe('ShareSelectedVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareSelectedVehiclesService = TestBed.get(ShareSelectedVehiclesService);
    expect(service).toBeTruthy();
  });
});
