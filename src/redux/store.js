// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
const initialState = {
    tasks: []
  };
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : initialState;

const store = configureStore({
  reducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
