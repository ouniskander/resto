import { TestBed } from '@angular/core/testing';

import { DatalistclientService } from './datalistclient.service';

describe('DatalistclientService', () => {
  let service: DatalistclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatalistclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
