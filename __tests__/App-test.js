/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/Setup';
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
// jest.mock('react-native-gesture-handler', () => {});
// jest.mock('@react-navigation/stack', () => {
//   return {
//     createStackNavigator: jest.fn(),
//   }
// });

it('renders correctly', () => {
  renderer.create(<App />)
});
