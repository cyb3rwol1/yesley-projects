import { TestBed, inject } from '@angular/core/testing';

import { PapelService } from './papel.service';

describe('PapelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PapelService]
    });
  });

  it('should be created', inject([PapelService], (service: PapelService) => {
    expect(service).toBeTruthy();
  }));
});
