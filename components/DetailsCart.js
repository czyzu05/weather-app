import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherContext } from "../WeatherContext";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DetailsCart = () => {
  const { currentWeather } = useContext(WeatherContext);
  const {
    main: { feels_like, humidity, pressure, temp },
    weather: [details],
    wind: { speed },
  } = currentWeather;

  const { icon, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  const date = new Date().toDateString();

  return (
    <View style={styles.cartContainer}>
      <View style={styles.mainInfo}>
        <Image style={styles.weatherImg} source={{ uri: iconUrl }} />
        <Text style={styles.description}>{description}</Text>
        <Text style={{ color: "silver" }}>{date}</Text>
        <Text style={styles.temp}>{Math.floor(temp)}°</Text>
      </View>
      <View style={styles.additionalInfo}>
        <View
          style={{
            ...styles.infoField,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderColor: "#B0E0E6",
          }}
        >
          <Feather name="wind" size={30} color="white" />
          <View style={styles.values}>
            <Text style={styles.valuesTitle}>wind</Text>
            <Text style={styles.value}>{speed} km/j</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderTopColor: "#B0E0E6",
          }}
        >
          <Feather name="thermometer" size={30} color="white" />
          <View style={styles.values}>
            <Text style={styles.valuesTitle}>feels like</Text>
            <Text style={styles.value}>{feels_like}°</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderTopColor: "#B0E0E6",
            borderRightColor: "#B0E0E6",
          }}
        >
          <Ionicons name="ios-pulse" size={30} color="white" />
          <View style={styles.values}>
            <Text style={styles.valuesTitle}>pressure</Text>
            <Text style={styles.value}>{pressure} mbar</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderTopColor: "#B0E0E6",
          }}
        >
          <MaterialCommunityIcons
            name="water-percent"
            size={30}
            color="white"
          />
          <View style={styles.values}>
            <Text style={styles.valuesTitle}>humidity</Text>
            <Text style={styles.value}>{humidity}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#1E90FF",
  },
  mainInfo: {
    flex: 4,
    alignItems: "center",
  },
  additionalInfo: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  weatherImg: {
    width: 150,
    height: 100,
  },
  description: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "#fff",
  },
  temp: {
    fontSize: 70,
    fontWeight: "bold",
    marginTop: 25,
    color: "#fff",
  },
  infoField: {
    flexBasis: 150,
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    flexDirection: "row",
  },
  values: {
    marginLeft: 13,
  },
  value: {
    color: "white",
  },
  valuesTitle: {
    fontSize: 10,
    textTransform: "uppercase",
    color: "white",
  },
});

export default DetailsCart;
