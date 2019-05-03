import { combineReducers } from 'redux';

import { heroReducer } from './hero';

export const rootReducer = combineReducers({
  hero: heroReducer
});
