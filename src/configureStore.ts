import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { AppState } from './types/store';
// import apiErrorMiddleware from './middlewares/apiError.middleware';

const logger = createLogger();

export default function configureStore(preloadedState?: AppState) {
  const middlewares = [ logger, thunkMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  // const store = createStore(persistedReducer, preloadedState, composedEnhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
