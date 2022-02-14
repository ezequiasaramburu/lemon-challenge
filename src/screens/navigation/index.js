import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import Home from '../views/Home';
import { theme } from '../../constants/theme';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.colors.secondary,
    },
    headerTintColor: theme.colors.primary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Countries" component={Home} />
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
