import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './RootParams';
import navigatorStyle from '../assets/styles/NavigatorStyle';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
class HomeNavigator extends Component {
  render() {
    return (
      <HomeStack.Navigator screenOptions={{
        // headerStyle:navigatorStyle.headerStyle,
        // headerTintColor:navigatorStyle.headerTintColor.color,
        headerTitleStyle:navigatorStyle.headerTitleStyle
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Home' }}/>
      </HomeStack.Navigator>
    );
  }
}
export default HomeNavigator;
