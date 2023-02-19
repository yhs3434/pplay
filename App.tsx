import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  //
}>;

export default function App(props: Props): JSX.Element {
  return (
    <Container>
      <StatusBar />
      <Text>traverse</Text>
    </Container>
  );
}

const Container = styled(SafeAreaView)``;
