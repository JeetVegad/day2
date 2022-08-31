import { TestBed } from '@angular/core/testing';

import { FoodmasterService } from './foodmaster.service';

describe('FoodmasterService', () => {
  let service: FoodmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
