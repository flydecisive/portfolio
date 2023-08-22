import { configureStore } from '@reduxjs/toolkit';
import { navReducer } from './reducers/nav';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
