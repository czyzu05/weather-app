import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { WeatherContext } from "../WeatherContext";

import WeatherInfo from "../components/WeatherInfo";
import HourlyWeather from "../components/HourlyWeather";

const HomeScreen = () => {
  const { currentWeather, errorMsg } = useContext(WeatherContext);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <WeatherInfo />
        </View>
        <View style={styles.hourlyWeatherContainer}>
          <HourlyWeather />
        </View>
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
    justifyContent: "center",
    backgroundColor: "white",
  },
  main: {
    justifyContent: "center",
    flex: 9,
  },
  hourlyWeatherContainer: {
    flex: 3,
  },
});

export default HomeScreen;
