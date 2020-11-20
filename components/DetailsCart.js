import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherContext } from "../WeatherContext";

const DetailsCart = () => {
  const [currentWeather] = useContext(WeatherContext);
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
        <Text>{date}</Text>
        <Text style={styles.temp}>{Math.floor(temp)}°</Text>
      </View>
      <View style={styles.additionalInfo}>
        <View
          style={{
            ...styles.infoField,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderColor: "black",
          }}
        >
          <Image style={styles.weatherImgInfo} source={{ uri: iconUrl }} />
          <View style={styles.values}>
            <Text>wind</Text>
            <Text>{speed}km/j</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderTopColor: "black",
          }}
        >
          <Image style={styles.weatherImgInfo} source={{ uri: iconUrl }} />
          <View style={styles.values}>
            <Text>feels like</Text>
            <Text>{feels_like}°</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderTopColor: "black",
            borderRightWidth: 1,
          }}
        >
          <Image style={styles.weatherImgInfo} source={{ uri: iconUrl }} />
          <View style={styles.values}>
            <Text>pressure</Text>
            <Text>{pressure} mbar</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.infoField,
            borderTopWidth: 1,
            borderTopColor: "black",
          }}
        >
          <Image style={styles.weatherImgInfo} source={{ uri: iconUrl }} />
          <View style={styles.values}>
            <Text>humidity</Text>
            <Text>{humidity}km/j</Text>
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
    backgroundColor: "#427BFF",
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
  },
  temp: {
    fontSize: 70,
    fontWeight: "bold",
    marginTop: 25,
  },
  infoField: {
    flexBasis: 150,
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    flexDirection: "row",
  },
  weatherImgInfo: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
});

export default DetailsCart;
