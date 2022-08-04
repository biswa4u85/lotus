import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";

import UserRedux from './UserRedux';
import MainRedux from './MainRedux';

const reducers = combineReducers({
  user: UserRedux,
  auth: MainRedux,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState('redux'),
});