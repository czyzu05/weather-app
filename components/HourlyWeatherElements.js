import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WeatherContext } from "../WeatherContext";
import HourlyElement from "./HourlyElement";

const HourlyWeatherElements = () => {
  const { hourlyWeather } = useContext(WeatherContext);

  if (hourlyWeather) {
    return (
      <FlatList
        data={hourlyWeather.hourly}
        renderItem={({ item }) => <HourlyElement {...item} key={item.dt} />}
        horizontal={true}
      />
    );
  } else {
    return <Text>Error</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
});

export default HourlyWeatherElements;
