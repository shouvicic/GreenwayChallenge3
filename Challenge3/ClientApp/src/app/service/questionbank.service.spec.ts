import { TestBed, inject } from '@angular/core/testing';

import { QuestionbankService } from './questionbank.service';

describe('QuestionbankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionbankService]
    });
  });

  it('should be created', inject([QuestionbankService], (service: QuestionbankService) => {
    expect(service).toBeTruthy();
  }));
});
