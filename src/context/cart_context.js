import { useContext, createContext, useReducer, useEffect } from "react";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  MANAGE_AMOUNT,
  MANAGE_PRICE,
  CLEAR_CART,
  RESTORE_CART,
} from "../action.js";
import cart_reducer from "../reducer/cart_reducer.js";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const initialCartState = {
  cart: [],
  shipping_value: 10,
  price: {
    subtotal: 0,
    shipping: 0,
  },
};

const getInitialCartState = () => {
  const local = localStorage.getItem("filter_data");
  return local ? JSON.parse(local) : initialCartState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cart_reducer,
    initialCartState,
    getInitialCartState
  );

  useEffect(() => {
    dispatch({ type: MANAGE_PRICE });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("filter_data", JSON.stringify(state));
  }, [state]);

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

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        manageAmount,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
