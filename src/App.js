/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './navigators';

const App: () => React$Node = () => {
  return (
    <Fragment>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <RootNavigator/>
    </Fragment>
  );
};


export default App;
