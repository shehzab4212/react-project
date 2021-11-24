import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";
import CoinsList from "./screens/CoinsList";
import Coin from "./screens/Coin";
import ChatsScreen from "./screens/Chats";
import DrawerNavigator from "./navigation/drawer";
import colors from "./constants/colors";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={ChatsScreen} name="ChatsScreen" />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});