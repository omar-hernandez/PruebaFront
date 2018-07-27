import { TestBed, inject } from '@angular/core/testing';

import { Leia.Service.TsService } from './leia.service.ts.service';

describe('Leia.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Leia.Service.TsService]
    });
  });

  it('should be created', inject([Leia.Service.TsService], (service: Leia.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
