import { CLOSE_NAVBAR, OPEN_NAVBAR } from "../action";

export const product_reducer = (state, action) => {
  if (action.type === CLOSE_NAVBAR) {
    return { ...state, isNavbarOpen: false };
  }
  if (action.type === OPEN_NAVBAR) {
    return { ...state, isNavbarOpen: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
