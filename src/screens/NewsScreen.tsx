import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import listFooterStyle from '../assets/styles/ListFooterStyle';
import NewsCard from '../components/NewsCard';
import {HeadlineArticle} from '../models/HeadlineArticle';
import {NewsScreenNavigationProp} from '../navigation/RootParams';
import {getTopHeadlines} from '../services/NewsApi';
interface NewsProps {
  navigation: NewsScreenNavigationProp;
}
interface NewsState {
  topHeadlineArticles: HeadlineArticle[];
  pageNo: number;
  loadingMore: boolean;
}
class NewsScreen extends Component<NewsProps, NewsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      topHeadlineArticles: [],
      pageNo: 1,
      loadingMore: false,
    };
  }
  async componentDidMount() {
    await this.loadHeadlinesToState();
  }
  async loadHeadlinesToState() {
    try {
      const {pageNo} = this.state;
      const data = await getTopHeadlines(pageNo);
      const topHeadlineArticles: HeadlineArticle[] = data.articles;
      this.setState((prevState, nextProps) => ({
        topHeadlineArticles:
          pageNo === 1
            ? Array.from(topHeadlineArticles)
            : [...this.state.topHeadlineArticles, ...topHeadlineArticles],
      }));
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }
  renderItem: ListRenderItem<HeadlineArticle> = ({item}) => (
    <NewsCard article={item}></NewsCard>
  );
  loadMoreHeadLineArticles = () => {
    this.setState(
      (prevState, nextProps) => ({
        pageNo: prevState.pageNo + 1,
        loadingMore: true,
      }),
      async () => {
        await this.loadHeadlinesToState();
      },
    );
  };
  renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View style={listFooterStyle.listFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.topHeadlineArticles}
          renderItem={this.renderItem}
          onEndReached={this.loadMoreHeadLineArticles}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}
export default NewsScreen;
