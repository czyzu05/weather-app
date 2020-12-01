import React, { useContext } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { WeatherContext } from "../WeatherContext";
import HourlyElement from "./HourlyElement";

const HourlyWeatherElements = () => {
  const { hourlyWeather } = useContext(WeatherContext);

  if (hourlyWeather) {
    const elements = hourlyWeather.hourly.map(item => (
      <HourlyElement key={item.dt} {...item} />
    ));

    return (
      <ScrollView>
        <View style={styles.container}>{elements}</View>
      </ScrollView>
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
