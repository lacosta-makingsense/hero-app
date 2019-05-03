import { combineReducers } from 'redux';

import {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_ERROR,
  GET_HERO_REQUEST,
  GET_HERO_SUCCESS,
  GET_HERO_ERROR,
  HeroActionTypes,
  HeroListState,
  HeroDetailsState,
  // HeroState
} from '../types/hero';

const initialListState: HeroListState = {
  heroes: [],
  loading: false
};

const initialDetailsState: HeroDetailsState = {
  loading: false
};

// const initialState: HeroState = {
//   heroes: [],
//   loading: false
// };

export function heroListReducer(
  state = initialListState,
  action: HeroActionTypes
): HeroListState {
  switch (action.type) {
    case GET_HEROES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_HEROES_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: action.payload.heroes
      };
    case GET_HEROES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export function heroDetailsReducer(
  state = initialDetailsState,
  action: HeroActionTypes
): HeroDetailsState {
  switch (action.type) {
    case GET_HERO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: action.payload.hero
      };
    case GET_HERO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const heroReducer = combineReducers({
  list: heroListReducer,
  details: heroDetailsReducer
});
