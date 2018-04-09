'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Client from 'graphql-js-client';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import typeBundle from './types';
import typeBundle from '../schema/types';

import 'normalize.css';
import './app.css';
import reducers from '../reducers/index';

import Main from './components/pages/Main';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, {}, composeWithDevTools(middleware));

export const client = new Client(typeBundle, {
  url: 'https://starsigned.myshopify.com/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '558a78d02d960b9882b555efa0f443e5'
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Main client={client} />
  </Provider>,
  document.getElementById('app')
);
