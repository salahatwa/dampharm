import { TestBed } from '@angular/core/testing';

import { DentistserviceService } from './dentistservice.service';

describe('DentistserviceService', () => {
  let service: DentistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
