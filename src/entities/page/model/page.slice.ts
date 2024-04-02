import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPage } from './types';
import data from './data';

const initialState: IPage[] = data;

const pageSlice = createSlice({
  name: 'price-plan',
  initialState,
  reducers: {
    editPage(state, action: PayloadAction<IPage>) {
      const pageId = state.findIndex((item) => item.id === action.payload.id);
      state[pageId] = action.payload;
    },
  },
});

export const { editPage } = pageSlice.actions;

export default pageSlice.reducer;
