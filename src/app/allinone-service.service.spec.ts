import { TestBed } from '@angular/core/testing';

import { AllinoneServiceService } from './allinone-service.service';

describe('AllinoneServiceService', () => {
  let service: AllinoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllinoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
