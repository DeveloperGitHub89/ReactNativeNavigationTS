import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import DetailsNavigator from './DetailsNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import NewsScreen from '../screens/NewsScreen';

const Tab = createMaterialBottomTabNavigator();

class TabNavigator extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="News" activeColor="#fff">
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="profile" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsNavigator}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({color}) => (
              <Icon name="notification" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({color}) => (
              <Icon name="profile" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default TabNavigator;
