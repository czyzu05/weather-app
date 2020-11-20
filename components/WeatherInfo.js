import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WeatherContext } from "../WeatherContext";
import DetailsCart from "./DetailsCart";

const WeatherInfo = () => {
  const [currentWeather] = useContext(WeatherContext);
  const {
    name,
    sys: { country },
  } = currentWeather;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>
        {name}, {country}
      </Text>
      <View style={styles.cartContainer}>
        <DetailsCart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cityName: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 22,
    margin: 20,
    alignSelf: "flex-start",
  },
  cartContainer: {
    flex: 15,
    marginBottom: 15,
  },
});

export default WeatherInfo;
