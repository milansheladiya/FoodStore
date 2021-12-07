import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen"
import ResultShowScreen from "./src/screens/ResultShowScreen"

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    ResultShowScreen : ResultShowScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);



export default createAppContainer(navigator);
