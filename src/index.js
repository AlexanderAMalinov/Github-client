import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App.jsx'
import reducers from './reducers/index.js';
import './index.css';
import "@babel/polyfill";

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
