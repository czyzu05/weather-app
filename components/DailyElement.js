import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const DailyElement = ({ weather, dt, temp }) => {
  const dateObject = new Date(dt * 1000);
  const formatDate = dateObject.toLocaleString();

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <>
      <View style={styles.flexWrapper}>
        <Image style={styles.img} source={{ uri: iconUrl }} />
        <Text style={styles.weatherDay}>{formatDate.slice(0, 10)}</Text>
        <Text style={styles.weatherTemp}>{Math.floor(temp.day)}°</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  weatherDay: {
    flex: 6,
    color: "#fafafa",
    fontSize: 17,
  },
  weatherTemp: {
    flex: 3,
    color: "#fafafa",
    fontSize: 17,
  },
  img: {
    flex: 3,
    width: 75,
    height: 75,
  },
});

export default DailyElement;
