import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "@/redux/slices/profileSlice";
import ProductReducer from "@/redux/slices/productSlice";

export const store = configureStore({
  reducer: combineReducers({
    storeProfiles: ProfileReducer,
    storeProducts: ProductReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
