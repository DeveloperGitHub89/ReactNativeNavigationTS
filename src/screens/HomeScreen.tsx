import React, { Component } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import homeStyle from "../assets/styles/HomeStyle";
import { HomeScreenProps } from "../types/HomeScreenPropsType";

class HomeScreen extends Component<HomeScreenProps> {
    constructor(props:HomeScreenProps) {
        super(props);
    }
    redirectToDetails=()=>{
        this.props.navigation.navigate('Details')
    }
    render() {
        return (
            <View style={homeStyle.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
                <Text>Home Screen</Text>
                <Button title="Go to details" onPress={this.redirectToDetails}></Button>
            </View>
        );
    }
}

export default HomeScreen;