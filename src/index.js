import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import store, { persist } from './store';
import '~/lang';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
