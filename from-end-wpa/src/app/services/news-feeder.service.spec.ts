import { TestBed, inject } from '@angular/core/testing';

import { NewsFeederService } from './news-feeder.service';

describe('NewsFeederService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeederService]
    });
  });

  it('should be created', inject([NewsFeederService], (service: NewsFeederService) => {
    expect(service).toBeTruthy();
  }));
});
