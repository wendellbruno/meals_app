import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Categories, ContainerBG } from '../../components';
import { DUMMY_CATEGORIES } from '../../mock/CategoryData';
import { Title, IconTitle, ContainerTitle, ContainerList } from './styles';

export const Home: React.FC = () => {
  return (
    <ContainerBG>
      <ContainerList>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DUMMY_CATEGORIES}
          ListHeaderComponent={() => (
            <ContainerTitle>
              <IconTitle name="chef-hat" />
              <Title>Escolha uma categoria</Title>
            </ContainerTitle>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 5, width: 5 }} />
          )}
          renderItem={({ item }) => <Categories category={item} />}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{
            gap: 50,
          }}
        />
      </ContainerList>
    </ContainerBG>
  );
};
