import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { WeatherContext } from "../WeatherContext";
import { AntDesign } from "@expo/vector-icons";

import WeatherInfo from "../components/WeatherInfo";
import HourlyWeatherElements from "../components/HourlyWeatherElements";

const HomeScreen = ({ navigation }) => {
  const { currentWeather, errorMsg } = useContext(WeatherContext);
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <WeatherInfo />
        </View>
        <View style={styles.moreInfo}>
          <Text style={styles.textInfo}>Today</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Week weather")}>
            <View style={styles.nextDaysBtn}>
              <Text>Next 7 days</Text>
              <AntDesign name="right" size={22} color="black" />
            </View>
          </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
  main: {
    justifyContent: "center",
    flex: 9,
  },
  hourlyWeatherContainer: {
    flex: 3,
  },
  moreInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
  nextDaysBtn: {
    backgroundColor: "transparent",
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  textInfo: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default HomeScreen;
