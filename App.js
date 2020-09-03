import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { GlobalProvider } from "./src/context/GlobalState";
import React from "react";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "Expense Tracker",
    },
  }
);

const App= createAppContainer(navigator);

export default () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};
