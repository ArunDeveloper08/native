import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Home from "./Screens/Home";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Home />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
