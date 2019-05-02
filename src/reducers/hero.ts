import {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_ERROR,
  GET_HERO_REQUEST,
  GET_HERO_SUCCESS,
  GET_HERO_ERROR,
  HeroActionTypes,
  HeroState
} from '../types/hero';

const initialState: HeroState = {
  heroes: [],
  loading: false
};

export function heroReducer(
  state = initialState,
  action: HeroActionTypes
): HeroState {
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
    case GET_HERO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedHero: action.payload.hero
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
