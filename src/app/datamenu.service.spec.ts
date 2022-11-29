import { TestBed } from '@angular/core/testing';

import { DatamenuService } from './datamenu.service';

describe('DatamenuService', () => {
  let service: DatamenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
