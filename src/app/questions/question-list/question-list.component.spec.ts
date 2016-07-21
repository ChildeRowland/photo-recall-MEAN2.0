/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { QuestionListComponent } from './question-list.component';

describe('Component: QuestionList', () => {
  it('should create an instance', () => {
    let component = new QuestionListComponent();
    expect(component).toBeTruthy();
  });
});
