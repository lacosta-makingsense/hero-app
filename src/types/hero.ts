import { ApiError } from './error';

export interface Hero {
  name: string;
}

export interface HeroState {
  heroes: Hero[];
  selectedHero?: Hero;
  error?: ApiError;
  loading: boolean;
}

export const GET_HEROES_REQUEST = 'GET_HEROES_REQUEST';
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
export const GET_HEROES_ERROR = 'GET_HEROES_ERROR';

export const GET_HERO_REQUEST = 'GET_HERO_REQUEST';
export const GET_HERO_SUCCESS = 'GET_HERO_SUCCESS';
export const GET_HERO_ERROR = 'GET_HERO_ERROR';

export interface GetHeroesRequestAction {
  type: typeof GET_HEROES_REQUEST;
}

interface GetHeroesSuccessAction {
  type: typeof GET_HEROES_SUCCESS;
  payload: {
    heroes: Hero[];
  };
}

export interface GetHeroesErrorAction {
  type: typeof GET_HEROES_ERROR;
  payload: {
    error: ApiError;
  };
}

interface GetHeroRequestAction {
  type: typeof GET_HERO_REQUEST;
  payload: {
    id: string;
  };
}

interface GetHeroSuccessAction {
  type: typeof GET_HERO_SUCCESS;
  payload: {
    hero: Hero;
  };
}

interface GetHeroErrorAction {
  type: typeof GET_HERO_ERROR;
  payload: {
    error: ApiError;
  };
}

export type HeroActionTypes =
  | GetHeroesRequestAction
  | GetHeroesSuccessAction
  | GetHeroesErrorAction
  | GetHeroRequestAction
  | GetHeroSuccessAction
  | GetHeroErrorAction;
