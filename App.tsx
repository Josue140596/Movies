import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Stacks
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
};

export default App;
