import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {MainStackParamList} from '@/navigations/main';

type Props = {
  //
} & BottomTabScreenProps<MainStackParamList, 'Profile'>;

export default function ProfileScreen(_props: Props) {
  return (
    <Container>
      <Text>profile</Text>
    </Container>
  );
}

const Container = styled(View)``;
