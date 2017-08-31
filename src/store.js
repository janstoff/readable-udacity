import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './root-reducer.js'; // i.e. from Reducers-combined/index.js


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(
  promise(),
  thunk,
  logger
);


const store = createStore(
  reducer,
  composeEnhancers(middleware)
);

export default store;
