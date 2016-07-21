/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { QuestionService } from './question.service';

describe('Question Service', () => {
  beforeEachProviders(() => [QuestionService]);

  it('should ...',
      inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));
});
