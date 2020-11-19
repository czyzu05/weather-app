import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { WeatherContext } from "../WeatherContext";

import WeatherInfo from "../components/WeatherInfo";
import Details from "../components/Details";

const HomeScreen = () => {
  const [currentWeather, errorMsg] = useContext(WeatherContext);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <StatusBar style="auto" />
          <WeatherInfo />
        </View>
        <Details />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>{errorMsg}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});

export default HomeScreen;
