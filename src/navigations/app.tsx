import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen, HomeScreen} from '../screens';

export type AppStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
