import React from 'react';
import { View } from 'react-native';

import { Container,IconBackButton } from './styles';

type Props = {
  titlePage: string;
  favoriteIcon: boolean;
}

export const HeaderPages: React.FC<Props> = ({titlePage, favoriteIcon}) => {
  return (
    <Container>
      <IconBackButton name="arrow-left"/>
    </Container>
  );
}
