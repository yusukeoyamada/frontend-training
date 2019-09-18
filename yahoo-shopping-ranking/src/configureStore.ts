import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/rootReducers'

export const history = createBrowserHistory()

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history),
      ),
    ),
  );

  return store;
}
