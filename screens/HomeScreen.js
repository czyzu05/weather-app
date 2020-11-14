import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import ListItem from "../components/ListItem";
import LoadingIndicator from "../components/LoadingIndicator";

const HomeScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState([
    { name: "San Jose", id: 5392171 },
    { name: "New York", id: 5128581 },
    { name: "London", id: 2643744 },
    { name: "Paris", id: 2968815 },
    { name: "Hong Kong", id: 1819729 },
    { name: "Singapore", id: 1880252 },
    { name: "Beijing", id: 1816670 },
    { name: "Sydney", id: 6619279 },
    { name: "São Paulo", id: 3448439 },
    { name: "San Juan", id: 4568138 },
    { name: "Mumbai", id: 1275339 },
    { name: "Reykjavík", id: 6692263 },
    { name: "Kraków", id: 3094802 },
  ]);

  useEffect(() => {
    const ids = cities.map(city => city.id);
    const API_KEY = "c7398fe065dc140cf0706c9f9f7c835c";
    fetch(
      `http://api.openweathermap.org/data/2.5/group?units=metric&APPID=${API_KEY}&id=` +
        ids
    )
      .then(res => res.json())
      .then(body =>
        body.list.map(city => {
          return {
            id: city.id,
            name: city.name,
            temp: Math.round(city.main.temp),
            icon:
              "https://openweathermap.org/img/w/" +
              city.weather[0].icon +
              ".png",
            weather: city.weather[0].main,
          };
        })
      )
      .then(cities => {
        setCities(cities);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView>
      {cities.map(city => (
        <ListItem
          key={city.id}
          name={city.name}
          temp={city.temp}
          weather={city.weather}
          icon={city.icon}
          onPress={() =>
            props.navigation.navigate("Detail", {
              name: city.name,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
