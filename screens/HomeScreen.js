import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { WeatherContext } from "../WeatherContext";

const HomeScreen = () => {
  const [currentWeather, errorMsg] = useContext(WeatherContext);

  if (currentWeather) {
    const {
      main: { temp },
    } = currentWeather;

    return (
      <View style={styles.container}>
        <Text>{temp}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
