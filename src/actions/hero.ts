import {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_ERROR,
  GET_HERO_REQUEST,
  GET_HERO_SUCCESS,
  GET_HERO_ERROR,
  Hero,
  HeroesResponse,
  HeroActionTypes,
} from '../types/hero';
import { ApiError } from '../types/error';
import { PaginationParams } from '../types/pagination';

export function getHeroesRequest(params?: PaginationParams): HeroActionTypes {
  return {
    type: GET_HEROES_REQUEST,
    payload: { params }
  }
}

export function getHeroesSuccess(response: HeroesResponse): HeroActionTypes {
  return {
    type: GET_HEROES_SUCCESS,
    payload: { response }
  }
}

export function getHeroesError(error: ApiError): HeroActionTypes {
  return {
    type: GET_HEROES_ERROR,
    payload: { error }
  }
}

export function getHeroRequest(id: string): HeroActionTypes {
  return {
    type: GET_HERO_REQUEST,
    payload: { id }
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
