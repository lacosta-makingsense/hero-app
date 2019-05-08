import { takeEvery } from 'redux-saga/effects'

import { GET_HEROES_REQUEST, GET_HERO_REQUEST } from '../types/hero';
import { getHeroes, getHero } from './hero';

export default function* rootSaga() {
  yield takeEvery(GET_HEROES_REQUEST, getHeroes);
  yield takeEvery(GET_HERO_REQUEST, getHero);
}
