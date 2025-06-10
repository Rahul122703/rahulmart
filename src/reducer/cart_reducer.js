import { ADD_PRODUCT, REMOVE_PRODUCT } from "../action.js";

const card_reducer = (state, action) => {
  if (action.type === ADD_PRODUCT) {
    const { id, product, productPrice, color, cartAmount } = action.payload;
    return {
      ...state,
      cart: [...state.cart, { id, product, productPrice, color, cartAmount }],
    };
  }
  if (action.type === REMOVE_PRODUCT) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
};

export default card_reducer;
