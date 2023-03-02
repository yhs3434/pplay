import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '@/screens';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from './root';

export type AuthenticationStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

type Props = {
  //
} & NativeStackScreenProps<RootStackParamList, 'Authentication'>;

export default function AuthenticationNavigation(_props: Props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
