import {
  applyMiddleware,
  compose,
  createStore,
  Store
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import setupReducers from './setupReducers';

const anyWindow: any = window;
let middleware = [thunk];

const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
const logger = createLogger({ collapsed: true });
middleware = [...middleware, reduxImmutableStateInvariant, logger];

const composeEnhancers =
  // tslint:disable-next-line
  (typeof anyWindow !== 'undefined' && anyWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export default function configureStore(
  initialState: any = {},
  reducers: any
): Store {
  return createStore(
    setupReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
