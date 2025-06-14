import {
  OPEN_NAVBAR,
  CLOSE_NAVBAR,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_SUCCESS,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_SUCCESS,
  PRODUCT_CARD_DESC,
  RETRY,
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
  if (action.type === SINGLE_PRODUCT_LOADING) {
    return { ...state, singleproductLoading: true };
  }
  if (action.type === SINGLE_PRODUCT_ERROR) {
    return { ...state, singleproductError: true, singleproductLoading: false };
  }
  if (action.type === SINGLE_PRODUCT_SUCCESS) {
    console.log("action.payload");
    console.log(action.payload);
    return {
      ...state,
      singleproductLoading: false,
      singleproduct: action.payload,
    };
  }
  if (action.type === PRODUCT_CARD_DESC) {
    return {
      ...state,
      productCardChange: action.payload ? true : false,
    };
  }
  if (action.type === RETRY) {
    return {
      ...state,
      productLoading: true,
      productError: false,
      products: [],
      featuredProducts: [],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
