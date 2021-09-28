import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import AppNavigator from './AppNavigator';

class RootNavigator extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

export default RootNavigator;
