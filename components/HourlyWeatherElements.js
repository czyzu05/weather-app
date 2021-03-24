import React, { useContext } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WeatherContext } from "../WeatherContext";
import HourlyElement from "./HourlyElement";

const HourlyWeatherElements = () => {
  const { hourlyWeather } = useContext(WeatherContext);

  if (hourlyWeather) {
    return (
      <FlatList
        data={hourlyWeather.slice(0, 25)}
        keyExtractor={(item, index) => index.toString()}
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

export default HourlyWeatherElements;
