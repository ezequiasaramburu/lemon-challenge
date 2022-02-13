import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import Login from '../views/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={() => <Text>Home Test</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainNavigator = () => {
  if (true) {
    return <Login />;
  }

  return <StackNavigation />;
};

export default MainNavigator;
