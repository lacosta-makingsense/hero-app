import { SagaIterator } from 'redux-saga'
import { call, put, delay } from 'redux-saga/effects'

import {
  getHeroesSuccess,
  getHeroesError,
  getHeroSuccess,
  getHeroError
} from '../actions/hero';
import { marvelService } from '../services/marvel';
import {
  GetHeroesRequestAction,
  GetHeroRequestAction,
  HeroesResponse } from '../types/hero';

export function* getHeroes(action: GetHeroesRequestAction): SagaIterator {
  const { params } = action.payload;
  yield delay(500);
  try {
    const response: HeroesResponse = yield call(marvelService.getHeroes, params);
    yield put(getHeroesSuccess(response));
  } catch (e) {
    yield put(getHeroesError(e));
  }
}

export function* getHero(action: GetHeroRequestAction): SagaIterator {
  const { id } = action.payload;
  try {
    const hero = yield call(marvelService.getHero, id);
    yield put(getHeroSuccess(hero));
  } catch (e) {
    yield put(getHeroError(e));
  }
}
