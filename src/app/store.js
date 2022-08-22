import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/userSlice';
import PopupReducer from '../features/PopupSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    popup: PopupReducer,
  },
});
