import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, GlobalScreen, ChatScreen, ProfileScreen} from '@/screens';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from './root';

export type MainStackParamList = {
  Home: undefined;
  Global: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

type Props = {
  //
} & NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainNavigation(_props: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Global" component={GlobalScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
