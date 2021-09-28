import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
import detailsStyle from "../assets/styles/DetailsStyle";
import { DetailsScreenProps } from "../types/DetailsScreenPropsType";

class DetailsScreen extends Component<DetailsScreenProps> {
    constructor(props:DetailsScreenProps) {
        super(props);
    }
    render() {
        return (
            <View style={detailsStyle.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default DetailsScreen;