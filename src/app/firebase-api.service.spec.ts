import { TestBed } from '@angular/core/testing';

import { FirebaseAPIService } from './firebase-api.service';

describe('FirebaseApiService', () => {
  let service: FirebaseAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
