import { View, Text, TextInput, Switch, ToastAndroid, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaAndView from "../Components/SafeAreaAndView";

const Main = ({ navigation, title }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Appbar style={{ backgroundColor: "violet" }}>
        <Appbar.Action icon="heart" onPress={() => console.log("Heart")} />
        <Appbar.Content title="WOW" />
        <Appbar.Action
          icon="account-circle-outline"
          onPress={() => console.log("Heart")}
        />
        <Appbar.Action icon="camera" onPress={() => console.log("Heart")} />
      </Appbar>
      <TouchableOpacity>
      <Avatar.Image
        source={{
          uri: "https://th.bing.com/th?id=OIP.llNNPXEts_QN0I1zgM-D0wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        }}
        size={160}
        style={{ alignSelf: "center", margin: 20 }}
      />
</TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Register")}
        style={{ backgroundColor: "violet", marginHorizontal: 80, borderRadius: 10 }}
      >
        Click{" "}
      </Button>
      <Headline style={{textAlign:"center" , marginTop:20 , width:"50%" , alignSelf:"center", marginTop:30}}>About me </Headline>
      <Text style={{textAlign:"center"}}> Hey , My Name is Arun . I am HTML Developer </Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaAndView Component={Main} navigation={navigation} title="Home" />
  );
};

export default Home;
