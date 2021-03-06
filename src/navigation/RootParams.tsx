import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
//npm install @react-navigation/native-stack

export type RootStackParamList = {
    Home:undefined;
    Details:undefined;
    Explore:undefined;
    Profile:undefined;
    News:undefined;
};
 
type HomeNavigationStackScreenProp=NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsNavigationStackScreenProp=NativeStackScreenProps<RootStackParamList, 'Details'>;
type ExploreNavigationStackScreenProp=NativeStackScreenProps<RootStackParamList, 'Explore'>;
type ProfileNavigationStackScreenProp=NativeStackScreenProps<RootStackParamList, 'Profile'>;
type NewsNavigationStackScreenProp=NativeStackScreenProps<RootStackParamList, 'News'>;

export type HomeScreenNavigationProp = HomeNavigationStackScreenProp['navigation'];
export type DetailsScreenNavigationProp = DetailsNavigationStackScreenProp['navigation'];
export type ExploreScreenNavigationProp = ExploreNavigationStackScreenProp['navigation'];
export type ProfileScreenNavigationProp = ProfileNavigationStackScreenProp['navigation'];
export type NewsScreenNavigationProp = NewsNavigationStackScreenProp['navigation'];

// here only NativeStackScreenProps is used for all the navigators but each of the different type of navigation has its own type and it is recommended to use suitable type. 
// NativeStackScreenProps for @react-navigation/stack, DrawerScreenProps from @react-navigation/drawer, BottomTabScreenProps from @react-navigation/bottom-tabs and so on.
