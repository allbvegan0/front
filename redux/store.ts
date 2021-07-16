import { Action, ThunkAction, createStore, applyMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer, { RootState } from "./root.reducers";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {initialState as UserState} from './slices/user/user'
import {initialState as AuthState} from './slices/auth'
import {initialState as DeviceState} from './slices/device'
import rootSaga from "./root.saga";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer, REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
export interface ApplicationState {
  user: typeof UserState;
  auth: typeof AuthState;
  device: typeof DeviceState;
}

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {
  // const sagaMiddleware = createSagaMiddleware();

  const middlewares = [ logger,  thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: any = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore<RootState, any, any, any>(
    persistedReducer,
    undefined,
    composedEnhancers

  );
  // sagaMiddleware.run(rootSaga);

  return store;
}

export type store = typeof createStore;

export const store = configureStore()
export const wrapper = createWrapper(configureStore)
export const persistor = persistStore(store)
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType=void>=ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store;
