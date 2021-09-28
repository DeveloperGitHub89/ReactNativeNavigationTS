import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ExploreScreenProps } from "../types/ExploreScreenPropsType";

class ExploreScreen extends Component<ExploreScreenProps>{
    constructor(props:ExploreScreenProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Explore Screen</Text>
            </View>
        );
    }
}
export default ExploreScreen;