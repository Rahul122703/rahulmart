import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  MANAGE_AMOUNT,
  MANAGE_PRICE,
  CLEAR_CART,
} from "../action.js";

const card_reducer = (state, action) => {
  if (action.type === ADD_PRODUCT) {
    const {
      productInfo: {
        id,
        fields: {
          product,
          shipping,
          stock,
          colors,
          price,
          image: [{ url }],
        },
      },
      subAmount,
    } = action.payload;

    return {
      ...state,
      cart: [
        ...state.cart,
        {
          id,
          product,
          price,
          colors,
          url,
          stock,
          subAmount: subAmount + 1,
          shipping,
        },
      ],
    };
  }
  if (action.type === REMOVE_PRODUCT) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === MANAGE_AMOUNT) {
    const { id, method } = action.payload;
    const updatedCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.subAmount;
        if (method === "increase" && newAmount <= item.stock - 1) {
          newAmount += 1;
        } else if (method === "decrease") {
          newAmount = Math.max(1, newAmount - 1);
        }
        return { ...item, subAmount: newAmount };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === MANAGE_PRICE) {
    return {
      ...state,
      price: {
        subtotal: state.cart.reduce((acc, current) => {
          return acc + current.subAmount * current.price;
        }, 0),
        shipping: state.cart.reduce((acc, current) => {
          if (current.shipping === "true") {
            return acc + current.subAmount * state.shipping_value;
          }
          return acc;
        }, 0),
      },
    };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  } else {
    throw new Error("NO MATCHING ACTION TYPE IN CART_REDUCER");
  }
};

export default card_reducer;
