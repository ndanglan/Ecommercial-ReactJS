import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import cartsReducer from './features/cartsSlice';
import loadingReducer from './features/loadingSlice';

const mainReducers = {
  auth: authReducer,
  loading: loadingReducer,
  carts: cartsReducer,
}

const store = configureStore({
  reducer: mainReducers
})

export { store };