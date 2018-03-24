export const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
    cart: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_TO_CART:
    return {cart: [...state.cart, ...action.payload]}

  default:
    return state
  }
}
