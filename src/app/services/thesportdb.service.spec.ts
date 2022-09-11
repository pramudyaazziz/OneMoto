import { TestBed } from '@angular/core/testing';

import { ThesportdbService } from './thesportdb.service';

describe('ThesportdbService', () => {
  let service: ThesportdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThesportdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
