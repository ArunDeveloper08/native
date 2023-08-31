import { View, Text, TextInput, Switch, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const Home = () => {
  const press = () => {
    ToastAndroid.show("why are you click on button", ToastAndroid.SHORT);
  };
  return (
    <View style={{ marginTop: 50, backgroundColor: "crimson" }}>
      <Text>Home</Text>
      <Button onPress={press}>Click me</Button>
    </View>
  );
};
export default Home;
