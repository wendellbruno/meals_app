import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigationHook } from '../../hooks';

import { Container, IconBackButton, IconFavoriteButton, TitlePage } from './styles';

type Props = {
  titlePage: string;
  favoriteIcon?: boolean;
};

export const HeaderPages: React.FC<Props> = ({
  titlePage,
  favoriteIcon = false,
}: Props) => {
  const {goBack} = useNavigationHook();
  return (
    <Container>
      <TouchableOpacity onPress={() => goBack()}>
        <IconBackButton name="arrow-left" />
      </TouchableOpacity>
      <TitlePage>{titlePage}</TitlePage>
      {favoriteIcon ? (
        <TouchableOpacity>
          <IconFavoriteButton name="staro" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </Container>
  );
};
