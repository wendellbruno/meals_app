import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Categories, ContainerBG } from '../../components';
import { DUMMY_CATEGORIES } from '../../mock/CategoryData';
import {Title, ContainerTitle, ContainerList} from './styles';


export const Home: React.FC = () => {
  return (
    <ContainerBG>
    <ContainerTitle>
      <Title>Escolha uma categoria</Title>
    </ContainerTitle>
    <ContainerList>
     <FlatList
      data={DUMMY_CATEGORIES}
      ItemSeparatorComponent={() => <View style={{ height: 5, width: 5}} />}
      renderItem={({ item }) => <Categories category={item} />}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={{
        gap: 50
      }}
      />

      </ContainerList>
     </ContainerBG>
  );
}
