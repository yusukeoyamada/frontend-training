import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import counterReducer, { initialState } from './reducers/reducer';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(counterReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
