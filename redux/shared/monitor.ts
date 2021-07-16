import { Reducer } from "react";
import {
  Action,
  AnyAction,
  PreloadedState,
  StoreEnhancerStoreCreator,
} from "redux";
import {performance, PerformanceObserver} from 'perf_hooks';

const round = (number: number) => Math.round(number * 100) / 100;

// const monitorReducerEnhancer: StoreEnhancer<{}, {}> = (
  // if (typeof performance === 'undefined') {
  //   // Older Node.js
  //   global.performance = require('perf_hooks').performance;
  // } else {
  //   // Browser.
  //   global.performance = performance;
  // }
const monitorReducerEnhancer: any = (
  createStore: StoreEnhancerStoreCreator<{}>
) => <S = any, A extends Action = AnyAction>(
  reducer: Reducer<string, A>,
  initialState: PreloadedState<S>,
  enhancer: any
) => {
  const monitoredReducer = (state: any, action: any) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);

    console.log("reducer process time:", diff);

    return newState;
  };

  return createStore(monitoredReducer);
};

export default monitorReducerEnhancer;
