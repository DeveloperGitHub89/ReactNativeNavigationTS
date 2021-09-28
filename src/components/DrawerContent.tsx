import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Text,
  Title,
} from 'react-native-paper';
import drawerStyle from '../assets/styles/DrawerStyle';
import Icon from 'react-native-vector-icons/AntDesign';

class DrawerContent extends Component {
  onSignOutPressed = () => {
    Alert.alert('Sign out pressed');
  };
  render() {
    return (
      <View style={drawerStyle.container}>
        <DrawerContentScrollView {...this.props}>
          <View style={drawerStyle.drawerContent}>
            <View style={drawerStyle.userInfoSection}>
              <View style={drawerStyle.avatarContainer}>
                <Avatar.Image
                  source={require('../assets/images/male1.png')}
                  size={65}
                />
                <View style={drawerStyle.avatarNameContainer}>
                  <Title style={drawerStyle.title}>Abhishek Purohit</Title>
                  <Caption style={drawerStyle.caption}>@abhi</Caption>
                </View>
              </View>
              <View style={drawerStyle.row}>
                <View style={drawerStyle.section}>
                  <Paragraph
                    style={[drawerStyle.paragraph, drawerStyle.caption]}>
                    80
                  </Paragraph>
                  <Caption style={drawerStyle.caption}>Following</Caption>
                </View>
                <View style={drawerStyle.section}>
                  <Paragraph
                    style={[drawerStyle.paragraph, drawerStyle.caption]}>
                    100
                  </Paragraph>
                  <Caption style={drawerStyle.caption}>Followers</Caption>
                </View>
              </View>
            </View>
            <Drawer.Section style={drawerStyle.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  /*this.props.navigation.navigate('Home')*/
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="user" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  /*this.props.navigation.navigate('Profile')*/
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="book" color={color} size={size} />
                )}
                label="Bookmarks"
                onPress={() => {
                  /*props.navigation.navigate('BookmarkScreen')*/
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="setting" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  /*props.navigation.navigate('SettingsScreen')*/
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="customerservice" color={color} size={size} />
                )}
                label="Support"
                onPress={() => {
                  /*props.navigation.navigate('SupportScreen')*/
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={drawerStyle.bottomDrawerSection}>
          <DrawerItem
            label="Logout"
            onPress={this.onSignOutPressed}
            icon={({color, size}) => (
              <Icon name="logout" color={color} size={size}></Icon>
            )}
          />
        </Drawer.Section>
      </View>
    );
  }
}
export default DrawerContent;
