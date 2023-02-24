import { TestBed } from '@angular/core/testing';

import { EmpleatsService } from './empleats.service';

describe('EmpleatsService', () => {
  let service: EmpleatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
