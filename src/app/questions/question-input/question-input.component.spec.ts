/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { QuestionInputComponent } from './question-input.component';

describe('Component: QuestionInput', () => {
  it('should create an instance', () => {
    let component = new QuestionInputComponent();
    expect(component).toBeTruthy();
  });
});
