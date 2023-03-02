import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {MainStackParamList} from '@/navigations/main';

type Props = {
  //
} & BottomTabScreenProps<MainStackParamList, 'Chat'>;

export default function ChatScreen(_props: Props) {
  return (
    <Container>
      <Text>chat</Text>
    </Container>
  );
}

const Container = styled(View)``;
