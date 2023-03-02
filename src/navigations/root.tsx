import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigation from './authentication';
import MainNavigation from './main';

export type RootStackParamList = {
  Authentication: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainNavigation} />
      <Stack.Screen
        name="Authentication"
        component={AuthenticationNavigation}
      />
    </Stack.Navigator>
  );
}
