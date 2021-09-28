import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import newsCardStyle from '../assets/styles/NewsCardStyle';
import { HeadlineArticle } from '../models/HeadlineArticle';
interface NewsCardProps{
    article:HeadlineArticle
}
class NewsCard extends Component<NewsCardProps> {
  render() {
    return (
      <View style={newsCardStyle.cotainer}>
        <Text style={newsCardStyle.title}>{this.props.article.title}</Text>
        <Text style={newsCardStyle.author}>{this.props.article.author}</Text>
        <Image source={{uri:this.props.article.urlToImage}} style={newsCardStyle.image}></Image>
        <Text style={newsCardStyle.description}>{this.props.article.description}</Text>
      </View>
    );
  }
}

export default NewsCard;
