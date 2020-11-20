import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { WeatherContext } from "../WeatherContext";

import WeatherInfo from "../components/WeatherInfo";
import NextDaysWeather from "../components/NextDaysWeather";

const HomeScreen = () => {
  const [currentWeather, errorMsg] = useContext(WeatherContext);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <WeatherInfo />
        </View>
        <View style={styles.nextDaysContainer}>
          <NextDaysWeather />
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
  nextDaysContainer: {
    flex: 3,
  },
});

export default HomeScreen;
