import React, { useEffect, useState, createContext } from "react";
import * as Location from "expo-location";

export const WeatherContext = createContext();

const WEATHER_API_KEY = "c7398fe065dc140cf0706c9f9f7c835c";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export const WeatherProvider = props => {
  const [unitsSystem, setUnitsSystem] = useState("metric");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getWeatherInfo();
  }, []);

  const getWeatherInfo = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Access to location is needed to run this app");
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
      const { latitude, longitude } = location.coords;

      const weatherURL = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const hourlyURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherURL);
      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMsg(result.message);
      }

      const responseHourlyWeather = await fetch(hourlyURL);
      const data = await responseHourlyWeather.json();
      setHourlyWeather(data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather, errorMsg, hourlyWeather }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
