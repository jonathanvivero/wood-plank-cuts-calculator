import { TestBed } from '@angular/core/testing';

import { PieceFeedService } from './piece-feed.service';

describe('PieceFeedService', () => {
  let service: PieceFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
