import React, { ReactNode } from 'react';

import { Container } from './styles';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';

type IProps = {
  children: ReactNode
}
export const ContainerBG: React.FC<IProps> = ({children}: IProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView
    style={{flex: 1, backgroundColor: theme.colors.background}}
    >
    <Container>
     {children}
    </Container>
    </SafeAreaView>
  );
};
