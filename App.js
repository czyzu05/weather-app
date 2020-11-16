import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { WeatherProvider } from "./WeatherContext";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Weather" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  );
};

export default App;
