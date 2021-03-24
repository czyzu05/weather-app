import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const HourlyElement = ({ temp, dt, weather, index }) => {
  const dateObject = new Date(dt * 1000);
  const formatDate = dateObject.toLocaleString();

  const { icon } = weather[0];

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={[styles.container, index === 0 ? styles.firstElement : null]}>
      <Text>{formatDate.slice(10, 16)}</Text>
      <Image style={styles.img} source={{ uri: iconUrl }} />
      <Text> {index === 0 ? "Now" : `${Math.floor(temp)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 130,
    borderWidth: 1,
    borderColor: "#d4d9d6",
    borderRadius: 10,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  firstElement: {
    backgroundColor: "#1E90FF",
  },
  img: {
    width: 60,
    height: 60,
  },
});

export default HourlyElement;
