import { TestBed } from '@angular/core/testing';

import { LivreurdataService } from './livreur.service';

describe('LivreurService', () => {
  let service: LivreurdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreurdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
