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

import { QuestionInputComponent } from './question-input.component';
import { MessengerService } from '../../services/messenger/messenger.service';

describe('Component: QuestionInput', () => {
	let fb: FormBuilder;
	let messengerService: MessengerService;

  it('should create an instance', () => {
    let component = new QuestionInputComponent(messengerService, fb);
    expect(component).toBeTruthy();
  });
});
