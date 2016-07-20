/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MessengerService } from './messenger.service';

describe('Messenger Service', () => {
  beforeEachProviders(() => [MessengerService]);

  it('should ...',
      inject([MessengerService], (service: MessengerService) => {
    expect(service).toBeTruthy();
  }));
});
