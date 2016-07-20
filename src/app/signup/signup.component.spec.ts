/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { AuthService } from '../auth/auth.service';
import { MessengerService } from '../services/messenger/messenger.service';

describe('Component: Signup', () => {
	let authservice: AuthService;
	let fb: FormBuilder;
  let messengerService: MessengerService;

  it('should create an instance', () => {
    let component = new SignupComponent(messengerService, fb, authservice);
    expect(component).toBeTruthy();
  });
});
