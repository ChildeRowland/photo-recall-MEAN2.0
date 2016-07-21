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
import { QuestionService } from '../question.service';

describe('Component: QuestionInput', () => {
	let fb: FormBuilder;
	let messengerService: MessengerService;
  let questionService:QuestionService;

  it('should create an instance', () => {
    let component = new QuestionInputComponent(messengerService, questionService, fb);
    expect(component).toBeTruthy();
  });
});
