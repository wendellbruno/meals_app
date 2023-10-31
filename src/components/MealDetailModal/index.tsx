import React from 'react';
import { Modal } from 'react-native';
import { ContainerBG } from '../ContainerBG';
import { HeaderPages } from '../HeaderPages';
import {useMealsProvider} from '../../context'
import { IMeal } from '../../models';

import { Container, MealTitle } from './styles';

export const MealDetailModal: React.FC = () => {
  const {modal, handleChangeModal, mealSelected} = useMealsProvider();
  return (
   <Modal
   visible={modal}
   onRequestClose={() => {
    handleChangeModal({} as IMeal);
   }}
   animationType='slide'
   >
    <ContainerBG>
      <HeaderPages titlePage={mealSelected.title} favoriteIcon />
    </ContainerBG>
   </Modal>
  );
}
