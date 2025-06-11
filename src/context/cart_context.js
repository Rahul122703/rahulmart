import { useContext, createContext, useReducer, useEffect } from "react";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  MANAGE_AMOUNT,
  MANAGE_PRICE,
  CLEAR_CART,
} from "../action.js";
import cart_reducer from "../reducer/cart_reducer.js";

const CartContext = createContext();

const initialCartState = {
  cart: [],
  shipping_value: 10,
  price: {
    subtotal: 0,
    shipping: 0,
  },
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialCartState);

  const addToCart = (productInfo) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        productInfo,
        subAmount: 0,
      },
    });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id: productId } });
  };

  const manageAmount = (e, id) => {
    const method = e.currentTarget.name;
    dispatch({ type: MANAGE_AMOUNT, payload: { id, method } });
  };

  useEffect(() => {
    dispatch({ type: MANAGE_PRICE });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, manageAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
