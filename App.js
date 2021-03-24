import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { WeatherProvider } from "./WeatherContext";

import HomeScreen from "./screens/HomeScreen";
import NextDaysWeatherScreen from "./screens/NextDaysWeatherScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Currently weather" component={HomeScreen} />
          <Stack.Screen name="Week weather" component={NextDaysWeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  );
};

export default App;
