import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WeatherContext } from "../WeatherContext";
import HourlyElement from "./HourlyElement";

const HourlyWeatherElements = () => {
  const { hourlyWeather } = useContext(WeatherContext);

  if (hourlyWeather) {
    return (
      <FlatList
        data={hourlyWeather.hourly.slice(0, 25)}
        renderItem={({ item, index }) => (
          <HourlyElement {...item} key={item.dt} index={index} />
        )}
        horizontal
      />
    );
  } else {
    return <Text>Cannot connect with server, please try again</Text>;
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
