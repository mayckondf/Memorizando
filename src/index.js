import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import store, { persist } from './store';
import GlobalStyle from './styles';
import '~/lang';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <GlobalStyle>
          <Routes />
        </GlobalStyle>
      </PersistGate>
    </Provider>
  );
};

export default App;
