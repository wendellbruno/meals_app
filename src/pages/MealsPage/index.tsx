import React from 'react';
import { ContainerBG } from '../../components';
import { ParamListBase } from '@react-navigation/native';
import {DUMMY_MEALS} from '../../mock/MealsData'
export const MealsPage: React.FC = ({route}: ParamListBase) => {

  //@ts-ignore
  const { categoryId }: string = route?.params;

  const mealsByCategory = DUMMY_MEALS.filter((element) => element.categories.includes(categoryId));

  return (
    <ContainerBG>

    </ContainerBG>
  );
}
