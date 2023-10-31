import React from 'react';
import { ScrollView, SectionList } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { Complexity, Cost, IMeal } from '../../models';
import {
  ContainerBG,
  HeaderPages,
  ListOfPreparationMeal,
} from '../../components';

import {
  Container,
  HeaderDetail,
  ContainerIcons,
  MealImage,
  ContainerDetailIcon,
  TitleIcon,
  IConRestaurante,
  IconCash,
  IconTime,
  ContainerInfos,
  TitleInfo,
  TextInfo,
} from './styles';

export const MealDetailPage: React.FC = ({ route }: ParamListBase) => {
  //@ts-ignore
  const mealSelected: IMeal = route?.params.meal;


  const DATA = [
    {
      title: 'Ingredientes',
      data: mealSelected.ingredients,
    },
    {
      title: 'Modo de preparo',
      data: mealSelected.steps,
    },
  ];

  return (
    <ContainerBG>
      <HeaderPages titlePage={mealSelected.title} favoriteIcon  meal={mealSelected}/>

      <Container>
        <HeaderDetail>
          <MealImage source={{ uri: mealSelected.imageUrl }} />
          <ContainerIcons>
            <ContainerDetailIcon>
              <IconTime name="av-timer" />
              <TitleIcon>{mealSelected.duration} min</TitleIcon>
            </ContainerDetailIcon>
            <ContainerDetailIcon>
              <IconCash name="cash" />
              <TitleIcon>{Cost[mealSelected.cost]}</TitleIcon>
            </ContainerDetailIcon>
            <ContainerDetailIcon>
              <IConRestaurante name="restaurant" />
              <TitleIcon>{Complexity[mealSelected.complexity]}</TitleIcon>
            </ContainerDetailIcon>
          </ContainerIcons>
        </HeaderDetail>

        <ContainerInfos>
          {/* <ListOfPreparationMeal mealDetail={mealSelected} /> */}
           <SectionList
           stickyHeaderHiddenOnScroll={true}
            sections={DATA}
            renderSectionHeader={({section: {title}}) => (
              <TitleInfo>{title}</TitleInfo>
              )}
              renderItem={({ item }) => (
                <TextInfo>{item}</TextInfo>
                )}

              />
        </ContainerInfos>
              </Container>
    </ContainerBG>
  );
};
