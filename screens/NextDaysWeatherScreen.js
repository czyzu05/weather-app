import React, { useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import { StyleSheet, Text, View } from "react-native";
import DailyElement from "../components/DailyElement";

const NextDaysWeatherScreen = () => {
  const { dailyWeather } = useContext(WeatherContext);

  if (dailyWeather) {
    return (
      <>
        <View style={styles.wrapper}>
          <Text style={styles.dailyScreenHeader}>Next 7 days</Text>
          <View style={styles.weatherElements}>
            {dailyWeather.map((dailyData) => (
              <DailyElement key={dailyData.dt} {...dailyData} />
            ))}
          </View>
        </View>
      </>
    );
  } else {
    return <Text>Cannot connect with server, please try again</Text>;
  }
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1E90FF",
    flex: 1,
  },
  weatherElements: {
    marginTop: 50,
  },
  dailyScreenHeader: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
});

export default NextDaysWeatherScreen;
