import React, {Component} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
interface IState{
    isVisible: boolean;
}
class SplashScreen extends Component<{},IState> {
  constructor(props: any) {
    super(props);
    this.state={
        isVisible:true,
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white',alignItems: 'center',justifyContent: 'center'}}>
        <Image
          source={require('../assets/images/android/drawable-xhdpi/oie_transparent.png')}
          size={80}
        />
      </View>
    );
  }
}
export default SplashScreen;
