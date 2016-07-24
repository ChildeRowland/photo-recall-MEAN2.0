/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameComponent } from './game.component';
import { QuestionService } from '../questions/question.service';

describe('Component: Game', () => {
	let questionService: QuestionService;

  it('should create an instance', () => {
    let component = new GameComponent(questionService);
    expect(component).toBeTruthy();
  });
});
