import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WeatherContext } from "../WeatherContext";

const Details = () => {
  const [currentWeather] = useContext(WeatherContext);
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  return (
    <View style={styles.weatherDetails}>
      <Text>{`Feels like: ${feels_like}, humidity: ${humidity}, pressure: ${pressure}, windSpeed: ${speed}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
});

export default Details;
