import React from 'react';
import { Provider } from 'react-redux';
import Route from './redux/navigation/routes';

import store from './redux/store/index';

const App = () => (
  <Provider store={store()}>
    <Route />
  </Provider>
);

export default App;
