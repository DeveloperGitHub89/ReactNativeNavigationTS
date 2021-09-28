import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('window');
const listFooterStyle = StyleSheet.create({
  listFooter: {
    position: 'relative',
    width: width,
    height: height,
    paddingVertical: 20,
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderColor: Colors.veryLightPink
  }
});
export default listFooterStyle;
