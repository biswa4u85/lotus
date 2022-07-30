import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";

import MainRedux from './MainRedux';

const reducers = combineReducers({
  auth: MainRedux,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState('redux'),
});