import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import { WeatherContext } from "../WeatherContext";
import { AntDesign } from "@expo/vector-icons";

import WeatherInfo from "../components/WeatherInfo";
import HourlyWeatherElements from "../components/HourlyWeatherElements";

const HomeScreen = () => {
  const { currentWeather, errorMsg } = useContext(WeatherContext);
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <WeatherInfo />
        </View>
        <View style={styles.nextDays}>
          <TouchableHighlight onPress={() => alert("hello")}>
            <View style={styles.nextDaysBtn}>
              <Text>Next 7 days</Text>
              <AntDesign name="right" size={22} color="black" />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.hourlyWeatherContainer}>
          <HourlyWeatherElements />
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
  nextDays: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  nextDaysBtn: {
    backgroundColor: "transparent",
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
});

export default HomeScreen;
