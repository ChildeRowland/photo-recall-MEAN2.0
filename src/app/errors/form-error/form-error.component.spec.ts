/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FormErrorComponent } from './form-error.component';

describe('Component: FormError', () => {
  it('should create an instance', () => {
    let component = new FormErrorComponent();
    expect(component).toBeTruthy();
  });
});
