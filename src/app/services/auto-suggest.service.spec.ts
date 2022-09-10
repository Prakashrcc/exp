import { TestBed } from '@angular/core/testing';

import { AutoSuggestService } from './auto-suggest.service';

describe('AutoSuggestService', () => {
  let service: AutoSuggestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoSuggestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
