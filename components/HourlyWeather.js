import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { WeatherContext } from "../WeatherContext";

const HourlyWeather = () => {
  const { hourlyWeather } = useContext(WeatherContext);
  console.log(hourlyWeather.hourly.map(item => item.dt));

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Today</Text>
        <Button title="Next 7 Days" />
      </View>
      <View style={styles.fields}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
  },
  fields: {
    flex: 5,
  },
});

export default HourlyWeather;
