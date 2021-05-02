import { TestBed } from '@angular/core/testing';

import { TraduireService } from './traduire.service';

describe('TraduireService', () => {
  let service: TraduireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraduireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
