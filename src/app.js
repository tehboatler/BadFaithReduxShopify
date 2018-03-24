'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import 'normalize.css';
import reducers from '../reducers/index';

import Main from './components/pages/Main';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);

// store.dispatch(
//   postBook([
//     {
//       id: 3,
//       title: 'Book 3',
//       desc: 'Book 1 Description',
//       price: 10
//     }
//   ])
// );

// store.dispatch(
//   postBook([
//     {
//       id: 4,
//       title: 'Book 4',
//       desc: 'Book 2 Description',
//       price: 100
//     }
//   ])
// );
