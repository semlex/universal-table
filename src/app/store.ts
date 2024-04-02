import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productReducer } from '@/entities/product';
import { pricePlanReducer } from '@/entities/price-plan';
import { pageReducer } from '@/entities/page';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  pricePlan: pricePlanReducer,
  page: pageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
