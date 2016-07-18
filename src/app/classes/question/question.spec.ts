/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Question} from './question';

describe('Question', () => {
  it('should create an instance', () => {
    expect(new Question("question", "answer")).toBeTruthy();
  });
});
