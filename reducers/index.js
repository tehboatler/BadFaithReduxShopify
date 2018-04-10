'use strict';
import { combineReducers } from 'redux';

import casesReducers from './casesReducers';
import cartReducers from './cartReducers';
import collectionReducers from './collectionReducers';
import productReducers from './productReducers'

export default combineReducers({
  cases: casesReducers,
  cart: cartReducers,
  collections: collectionReducers,
  products: productReducers,
});
