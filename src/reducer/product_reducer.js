import {
  OPEN_NAVBAR,
  CLOSE_NAVBAR,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_SUCCESS,
} from "../action.js";

export const product_reducer = (state, action) => {
  if (action.type === CLOSE_NAVBAR) {
    return { ...state, isNavbarOpen: false };
  }
  if (action.type === OPEN_NAVBAR) {
    return { ...state, isNavbarOpen: true };
  }
  if (action.type === PRODUCT_LOADING) {
    return { ...state, productLoading: true };
  }
  if (action.type === PRODUCT_ERROR) {
    return { ...state, productError: true, productLoading: false };
  }
  if (action.type === PRODUCT_SUCCESS) {
    return {
      ...state,
      productLoading: false,
      products: action.payload,
      featuredProducts: action.payload.filter((currentItem) => {
        return currentItem.featured === "true";
      }),
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
