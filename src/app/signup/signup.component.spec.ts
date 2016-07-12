/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/common';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { AuthService } from '../auth/auth.service';

describe('Component: Signup', () => {
	let authservice: AuthService;
	let fb: FormBuilder;

  it('should create an instance', () => {
    let component = new SignupComponent(fb, authservice);
    expect(component).toBeTruthy();
  });
});
