import { TestBed } from '@angular/core/testing';

import { NewapicallserviceService } from './newapicallservice.service';

describe('NewapicallserviceService', () => {
  let service: NewapicallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewapicallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
