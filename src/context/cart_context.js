import { useContext, createContext, useReducer } from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT, MANAGE_AMOUNT } from "../action.js";
import cart_reducer from "../reducer/cart_reducer.js";

const CartContext = createContext();

const initialCartState = {
  cart: [],
  total_price: 0,
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

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id: productId } });
  };

  const manageAmount = (e, id) => {
    const method = e.currentTarget.name;
    dispatch({ type: MANAGE_AMOUNT, payload: { id, method } });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, manageAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
