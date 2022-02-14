import React from 'react';
import Screens from './src/screens';
import { Provider } from 'react-redux';
import store from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
