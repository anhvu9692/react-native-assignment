import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Trips from '../containers/trips';
import TripDetails from '../containers/tripDetails';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
        initialRouteName={'Trips'}
      >
        <Stack.Screen
          name={'Trips'}
          component={Trips}
          options={{
            headerTitle: 'Trips',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={'TripDetails'}
          component={TripDetails}
          options={{
            headerTitle: 'Trip Details',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default RootNavigator;
