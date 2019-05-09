import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { AppState } from './types/store';
import rootSaga from './sagas';

const logger = createLogger();

export default function configureStore(preloadedState?: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [ logger, sagaMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
