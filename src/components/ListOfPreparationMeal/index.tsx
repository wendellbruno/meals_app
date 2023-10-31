import React from 'react';
import { FlatList } from 'react-native';

import { Container,TextInfo } from './styles';
import { IMeal } from '../../models';

type Props = {
  mealDetail: IMeal
}

export const ListOfPreparationMeal: React.FC<Props> = ({mealDetail}: Props) => {
  return (
    <Container>
      <FlatList
      data={mealDetail.ingredients}
      renderItem={({item}) => <TextInfo>{item}</TextInfo>}
      />
    </Container>
  );
}
