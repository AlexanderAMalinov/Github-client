import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import "@babel/polyfill";

const enhancers = [applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(
  reducers,
  compose(...enhancers)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
