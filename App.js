import React, { useEffect, useState } from "react";
import {
  TouchableHighlight,
  Image,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function LoadingIndicator() {
  return (
    <View
      style={{
        paddingTop: 10,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator />
    </View>
  );
}

function ListItem(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#e5e5e5",
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 34, height: 34, marginRight: 10 }}
          source={{ uri: props.icon }}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>{props.name}</Text>
          <Text>{props.weather ? props.weather : "Loading..."}</Text>
        </View>
        <View style={{ flexGrow: 1 }} />
        {props.temp && (
          <View
            style={{
              backgroundColor: "#3978EA",
              borderRadius: 15,
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>{props.temp}°C</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}

function HomeScreen(props) {
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
  }, []); // eslint-disable-line

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
}

function Detail(props) {
  return <Text>Details</Text>;
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Weather" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
