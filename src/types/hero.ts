import { ApiError } from './error';
import { PaginationParams } from './pagination';

interface HeroExtra {
  available: number;
}

interface HeroUrl {
  type: string;
  url: string;
}

export interface Hero {
  id: any;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: HeroExtra;
  events: HeroExtra;
  series: HeroExtra;
  stories: HeroExtra;
  urls: HeroUrl[];
}

export interface HeroesResponse {
  heroes: Hero[];
  total: number;
  current: number;
  perPage: number;
}

export interface HeroListState {
  response: HeroesResponse;
  error?: ApiError;
  loading: boolean;
}

export interface HeroDetailsState {
  hero?: Hero;
  error?: ApiError;
  loading: boolean;
}

export interface HeroState {
  list: HeroListState;
  details: HeroDetailsState;
}

export const GET_HEROES_REQUEST = 'GET_HEROES_REQUEST';
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
export const GET_HEROES_ERROR = 'GET_HEROES_ERROR';

export const GET_HERO_REQUEST = 'GET_HERO_REQUEST';
export const GET_HERO_SUCCESS = 'GET_HERO_SUCCESS';
export const GET_HERO_ERROR = 'GET_HERO_ERROR';

export interface GetHeroesRequestAction {
  type: typeof GET_HEROES_REQUEST;
  payload: {
    params?: PaginationParams;
  };
}

interface GetHeroesSuccessAction {
  type: typeof GET_HEROES_SUCCESS;
  payload: {
    response: HeroesResponse;
  };
}

interface GetHeroesErrorAction {
  type: typeof GET_HEROES_ERROR;
  payload: {
    error: ApiError;
  };
}

export interface GetHeroRequestAction {
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
