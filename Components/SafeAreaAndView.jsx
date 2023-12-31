import { View, Text, Platform ,StatusBar, SafeAreaView} from "react-native";
import React from "react";

const SafeAreaAndView = ({ Component, ...rest }) => {
  return (
    <View style={{
        paddingTop:Platform.OS ==="android" ? StatusBar.currentHeight : 0
        }}>
            <SafeAreaView>
            <Component {...rest}/>
            </SafeAreaView>
    
    </View>
  );
};

export default SafeAreaAndView;
