import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger';
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        logger,
        routerMiddleware(history),
      ),
    ),
  );

  return store;
}
