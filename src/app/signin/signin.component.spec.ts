/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from '../auth/auth.service';

describe('Component: Signin', () => {
	let authservice: AuthService;

  	it('should create an instance', () => {
    	let component = new SigninComponent(authservice);
    	expect(component).toBeTruthy();
  	});
});
