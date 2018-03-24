'use strict';
import { combineReducers } from 'redux';

import casesReducers from './casesReducers';
import cartReducers from './cartReducers';

export default combineReducers({
  cases: casesReducers,
  cart: cartReducers
});
