import { TestBed } from '@angular/core/testing';

import { CustomerSurveryFormService } from './customer-survery-form.service';

describe('CustomerSurveryFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerSurveryFormService = TestBed.get(CustomerSurveryFormService);
    expect(service).toBeTruthy();
  });
});
