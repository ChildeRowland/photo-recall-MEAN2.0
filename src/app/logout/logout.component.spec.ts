/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../auth/auth.service';

describe('Component: Logout', () => {
	let authservice: AuthService;

  it('should create an instance', () => {
    let component = new LogoutComponent(authservice);
    expect(component).toBeTruthy();
  });
});
