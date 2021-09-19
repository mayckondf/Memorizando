import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistReducers } from './persistReducer';
import reducers from './reducers';
import '~/config/reactotron';

const store = __DEV__
  ? createStore(persistReducers(reducers), console?.tron?.createEnhancer())
  : createStore(persistReducers(reducers));

const persist = persistStore(store);

export { persist };
export default store;
