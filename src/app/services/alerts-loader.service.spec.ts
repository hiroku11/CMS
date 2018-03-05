import { TestBed, inject } from '@angular/core/testing';

import { AlertsLoaderService } from './alerts-loader.service';

describe('AlertsLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsLoaderService]
    });
  });

  it('should be created', inject([AlertsLoaderService], (service: AlertsLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
