/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ImageComponent } from './image.component';

describe('Component: Image', () => {
  it('should create an instance', () => {
    let component = new ImageComponent();
    expect(component).toBeTruthy();
  });
});
