"use strict"
import actions from './constants';

// ============================================================
// Add To Cart
// ============================================================
export const addToCart = (case) => ({
  type: actions.ADD_TO_CART,
  payload: case
})
