import pushReducer from './slices/pushSlice';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    push: pushReducer
  },
});
