import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const persistReducers = (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Memorize',
      storage: AsyncStorage,
      whitelist: [],
    },
    reducers,
  );

  return persistedReducer;
};

export { persistReducers };
