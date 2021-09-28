import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ProfileScreenProps } from "../types/ProfileScreenPropsType";

class ProfileScreen extends Component<ProfileScreenProps>{
    constructor(props:ProfileScreenProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}
export default ProfileScreen;