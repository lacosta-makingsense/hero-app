import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  getHeroesRequest,
  getHeroesSuccess,
  getHeroesError,
  getHeroRequest,
  getHeroSuccess,
  getHeroError
} from '../actions/hero';
import { AppState } from '../types/store';
import { marvelService } from '../services/marvel';

export const getHeroes = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(getHeroesRequest());
  try {
    const heroes = await marvelService.getHeroes();
    dispatch(getHeroesSuccess(heroes));
  } catch (e) {
    dispatch(getHeroesError(e));
  }
}

export const getHero = (id: string): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(getHeroRequest());
  try {
    const hero = await marvelService.getHero(id);
    dispatch(getHeroSuccess(hero));
  } catch (e) {
    dispatch(getHeroError(e));
  }
}
