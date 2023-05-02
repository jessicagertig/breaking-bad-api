import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import screenReducer from './reducers/screenSize';
import { apiService } from '../../services/apiService';

const combinedReducer = combineReducers({
  screen: screenReducer,
  [apiService.reducerPath]: apiService.reducer,
});

//When the HYDRATE action is dispatched, it carries with it a "delta" object that contains the differences between the server store and the client store. The reducer function then merges the server store with the client store by applying the delta object to the previous state of the store.
const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => 
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
  });

type Store = ReturnType<typeof makeStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true});
