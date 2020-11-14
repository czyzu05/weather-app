import React from "react";
import { TouchableHighlight, Image, View, Text } from "react-native";

const ListItem = props => {
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
};

export default ListItem;
