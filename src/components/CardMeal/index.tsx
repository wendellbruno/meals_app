import React from 'react';

import {
  Container,
  ImageMeal,
  ContainerImage,
  ContainerDetail,
  ContainerDetailInfos,
  ContainerName,
  NameMeal,
  IconCash,
  IconTime,
  IConRestaurante
} from './styles';
import { IMeal, Cost, Complexity } from '../../models';

type Props = {
  meals: IMeal;
};

export const CardMeal: React.FC<Props> = ({ meals }: Props) => {
  return (
    <Container>
      <ContainerImage>
        <ImageMeal source={{ uri: meals.imageUrl }} />
      </ContainerImage>
      <ContainerDetail>
        <ContainerName>
          <NameMeal>{meals.title}</NameMeal>
        </ContainerName>
        <ContainerDetailInfos>
          <IconTime name="av-timer" />
          <NameMeal>{meals.duration} min</NameMeal>
        </ContainerDetailInfos>
        <ContainerDetailInfos>
        <IconCash name="cash" />
          <NameMeal>{Cost[meals.cost]}</NameMeal>
        </ContainerDetailInfos>
        <ContainerDetailInfos>
          <IConRestaurante name="restaurant" />
          <NameMeal>{Complexity[meals.complexity]}</NameMeal>
        </ContainerDetailInfos>
      </ContainerDetail>
    </Container>
  );
};
