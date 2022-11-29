import { TestBed } from '@angular/core/testing';

import { DatacommandeService } from './datacommande.service';

describe('DatacommandeService', () => {
  let service: DatacommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
