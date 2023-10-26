import React from 'react';
import { View } from 'react-native';

import { Container, TitleCategory } from './styles';
import { ICategory } from '../../models';

type Props = {
  category: ICategory
}

export const Categories: React.FC<Props> = ({category}: Props) => {
  return (
    <Container>
      <TitleCategory>
        {category.title}
      </TitleCategory>
    </Container>
  );
}
