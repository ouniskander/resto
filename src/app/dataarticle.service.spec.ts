import { TestBed } from '@angular/core/testing';

import { DataarticleService } from './dataarticle.service';

describe('DataarticleService', () => {
  let service: DataarticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataarticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
