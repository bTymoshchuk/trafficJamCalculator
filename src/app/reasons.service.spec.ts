import { TestBed } from '@angular/core/testing';

import { ReasonsService } from './reasons.service';

describe('ReasonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReasonsService = TestBed.get(ReasonsService);
    expect(service).toBeTruthy();
  });
});
