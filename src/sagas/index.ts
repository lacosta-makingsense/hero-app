import { takeLatest } from 'redux-saga/effects'

import { GET_HEROES_REQUEST, GET_HERO_REQUEST } from '../types/hero';
import { getHeroes, getHero } from './hero';

export default function* rootSaga() {
  yield takeLatest(GET_HEROES_REQUEST, getHeroes);
  yield takeLatest(GET_HERO_REQUEST, getHero);
}
