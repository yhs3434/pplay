import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './src/navigations';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {initializeI18next} from './src/plugins/i18next';

initializeI18next();

export default function App(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <CustomStatusBar />
        <AppNavigation />
      </Container>
    </Wrapper>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
`;

type WrapperProps = PropsWithChildren<{}>;

const queryClient = new QueryClient();

const Wrapper = ({children}: WrapperProps) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

type CustomStatusBarProps = {
  //
};

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const CustomStatusBar = (_props: CustomStatusBarProps) => {
  const [hidden, setHidden] = React.useState<boolean>(false);
  const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = React.useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  // TODO: Context Api
  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <StatusBar
      animated={true}
      backgroundColor="#61dafb"
      barStyle={statusBarStyle}
      showHideTransition={statusBarTransition}
      hidden={hidden}
    />
  );
};
