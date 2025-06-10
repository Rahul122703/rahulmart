import { useContext, createContext, useReducer } from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../action.js";
import cart_reducer from "../reducer/cart_reducer.js";

const CartContext = createContext();

const initialCartState = {
  cart: [],
  total_price: 0,
};

// Sample cart structure:
// cart = [
//   {
//     productName: "",
//     productPrice: 0,
//     color: "",
//     cartAmount: 1
//   }
// ];

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialCartState);

  const addToCart = (productInfo) => {
    const { id, product, price, colors } = productInfo;
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        id: id,
        product: product,
        productPrice: price,
        color: colors,
        cartAmount: 0,
      },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id: productId } });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
