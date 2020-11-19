import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherContext } from "../WeatherContext";

const WeatherInfo = () => {
  const [currentWeather] = useContext(WeatherContext);
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: "#000",
  },
  textSecondary: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
    marginTop: 10,
    textTransform: "uppercase",
  },
});

export default WeatherInfo;
