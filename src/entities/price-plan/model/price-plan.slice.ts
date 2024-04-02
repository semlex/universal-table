import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPricePlan } from './types';
import data from './data';

const initialState: IPricePlan[] = data;

const pricePlanSlice = createSlice({
  name: 'price-plan',
  initialState,
  reducers: {
    editPricePlan(state, action: PayloadAction<IPricePlan>) {
      const pricePlanId = state.findIndex((item) => item.id === action.payload.id);
      state[pricePlanId] = action.payload;
    },
  },
});

export const { editPricePlan } = pricePlanSlice.actions;

export default pricePlanSlice.reducer;
