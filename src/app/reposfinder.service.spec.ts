import { TestBed } from '@angular/core/testing';

import { ReposfinderService } from './reposfinder.service';

describe('ReposfinderService', () => {
  let service: ReposfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
