import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DrawerContent from '../components/DrawerContent';


const Drawer = createDrawerNavigator();
class AppNavigator extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
        <Drawer.Screen name="News" component={TabNavigator} />
      </Drawer.Navigator>
    );
  }
}

export default AppNavigator;
