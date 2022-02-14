import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../views/Login';
import Home from '../views/Home';
import CountryDetail from '../views/CountryDetail';
import { theme } from '../../constants/theme';
import { getCurrentUser } from '../../state/auth/actions';

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
        <Stack.Screen
          name="Country detail"
          component={CountryDetail}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainNavigator = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

  return <StackNavigation />;
};

export default MainNavigator;
