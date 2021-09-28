import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const newsCardStyle = StyleSheet.create({
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cotainer: {
    backgroundColor: 'white',
    margin: width*0.03,
    borderRadius:width * 0.05,
    shadowColor:'#000',
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.8,
    shadowRadius:1
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: 'gray',
    fontSize: 17,
  },
  image: {
    height: height / 4,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: '#D3D3D3',
  },
});
export default newsCardStyle;
