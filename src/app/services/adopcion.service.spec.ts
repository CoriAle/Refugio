import { TestBed, inject } from '@angular/core/testing';

import { AdopcionService } from './adopcion.service';

describe('AdopcionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdopcionService]
    });
  });

  it('should be created', inject([AdopcionService], (service: AdopcionService) => {
    expect(service).toBeTruthy();
  }));
});
