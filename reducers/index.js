'use strict';
import { combineReducers } from 'redux';

import casesReducers from './casesReducers';
import cartReducers from './cartReducers';
import collectionReducers from './collectionReducers';

export default combineReducers({
  cases: casesReducers,
  cart: cartReducers,
  collections: collectionReducers,
});
