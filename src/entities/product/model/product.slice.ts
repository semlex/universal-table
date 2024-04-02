import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from './types';
import data from './data';

const initialState: IProduct[] = data;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    editProduct(state, action: PayloadAction<IProduct>) {
      const productId = state.findIndex((item) => item.id === action.payload.id);
      state[productId] = action.payload;
    },
  },
});

export const { editProduct } = productSlice.actions;

export default productSlice.reducer;
