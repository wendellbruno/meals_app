import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from './StackRoutes'

export const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
  );
}
