import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {BottonsTab} from './BottonsTab';

export const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
        <BottonsTab />
    </NavigationContainer>
  );
}
