import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const amountstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default amountstore;