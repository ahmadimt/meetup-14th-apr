import { TestBed, inject } from '@angular/core/testing';

import { BroadCastdataServiceService } from './broad-castdata-service.service';

describe('BroadCastdataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadCastdataServiceService]
    });
  });

  it('should be created', inject([BroadCastdataServiceService], (service: BroadCastdataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
