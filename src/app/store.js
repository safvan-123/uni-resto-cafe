import { configureStore } from "@reduxjs/toolkit";
import navigateReducer from "../features/navigate/navogateSlice";
import porductReducer from "../features/product/productSlice";
import cartReducer from "../features/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    navigate: navigateReducer,
    products: porductReducer,
    cart: cartReducer,
  },
});
