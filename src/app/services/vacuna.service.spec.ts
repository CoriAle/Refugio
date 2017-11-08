import { TestBed, inject } from '@angular/core/testing';

import { VacunaService } from './vacuna.service';

describe('VacunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacunaService]
    });
  });

  it('should be created', inject([VacunaService], (service: VacunaService) => {
    expect(service).toBeTruthy();
  }));
});
