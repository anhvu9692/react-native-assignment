/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import AppReducer from './reducers';

let store = createStore(AppReducer);

const Setup = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);


export default Setup;
