import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, EachProduct } from "@/redux/allTypes";

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<EachProduct>) => {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (eachProduct) => eachProduct.id !== productId
      );
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
