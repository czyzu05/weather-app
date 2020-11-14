import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingIndicator = () => {
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
};

export default LoadingIndicator;
