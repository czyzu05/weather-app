import React, { useEffect, useState, createContext } from "react";
import * as Location from "expo-location";

export const WeatherContext = createContext();

const WEATHER_API_KEY = "c7398fe065dc140cf0706c9f9f7c835c";

export const WeatherProvider = (props) => {
  const [unitsSystem, setUnitsSystem] = useState("metric");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getWeatherInfo();
  }, []);

  const getWeatherInfo = async () => {
    try {
      let status = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Access to location is needed to run this app");
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
      const { latitude, longitude } = location.coords;

      const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const hourlyAndDailyURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(currentWeatherURL);
      const result = await response.json();

      // //request for currently weather
      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMsg(result.message);
      }
      //request for hourly and daily weather
      const responseHourlyWeather = await fetch(hourlyAndDailyURL);
      const data = await responseHourlyWeather.json();
      setHourlyWeather(data.hourly);
      setDailyWeather(data.daily.slice(1, 8));
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather, errorMsg, hourlyWeather, dailyWeather }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
