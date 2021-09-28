import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import {RootStackParamList} from './RootParams';
import navigatorStyle from '../assets/styles/NavigatorStyle';

const DetailsStack = createNativeStackNavigator<RootStackParamList>();
class DetailsNavigator extends Component {
  render() {
    return (
      <DetailsStack.Navigator
        screenOptions={{
          // headerStyle: navigatorStyle.headerStyle,
          // headerTintColor: navigatorStyle.headerTintColor.color,
          headerTitleStyle: navigatorStyle.headerTitleStyle,
        }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{ title: 'Welcome to Details' }} />
      </DetailsStack.Navigator>
    );
  }
}
export default DetailsNavigator;
