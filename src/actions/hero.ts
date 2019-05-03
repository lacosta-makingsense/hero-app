import {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_ERROR,
  GET_HERO_REQUEST,
  GET_HERO_SUCCESS,
  GET_HERO_ERROR,
  Hero,
  HeroActionTypes,
} from '../types/hero';
import { ApiError } from '../types/error';

export function getHeroesRequest(): HeroActionTypes {
  return {
    type: GET_HEROES_REQUEST
  }
}

export function getHeroesSuccess(heroes: Hero[]): HeroActionTypes {
  return {
    type: GET_HEROES_SUCCESS,
    payload: { heroes }
  }
}

export function getHeroesError(error: ApiError): HeroActionTypes {
  return {
    type: GET_HEROES_ERROR,
    payload: { error }
  }
}

export function getHeroRequest(): HeroActionTypes {
  return {
    type: GET_HERO_REQUEST
  }
}

export function getHeroSuccess(hero: Hero): HeroActionTypes {
  return {
    type: GET_HERO_SUCCESS,
    payload: { hero }
  }
}

export function getHeroError(error: ApiError): HeroActionTypes {
  return {
    type: GET_HERO_ERROR,
    payload: { error }
  }
}
