import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

type Props = PropsWithChildren<{
  //
}>;

export default function App(props: Props): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <StatusBar />
        <Text>traverse</Text>
      </Container>
    </Wrapper>
  );
}

const Container = styled(SafeAreaView)``;

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({children}: WrapperProps) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
