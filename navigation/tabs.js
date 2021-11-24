import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../constants/icons";
import StackNavigator from "./stack";
import ChatsScreen from "../screens/Chats";
import StatusScreen from "../screens/Status";
import SettingScreen from "../screens/Setting";
import CallsScreen from "../screens/Calls";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: colors.chatBackgroundColor,
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "orange" : "gray";
          switch (route.name) {
            case "Chats":
              return (
                <Image
                  resizeMode="contain"
                  style={{ width: 30, height: 30, tintColor: tintColor }}
                  source={icons.chat}
                />
              );
            case "Status":
              return (
                <Image
                  resizeMode="contain"
                  style={{ width: 30, height: 30, tintColor: tintColor }}
                  source={icons.status}
                />
              );
            case "Calls":
              return (
                <Image
                  resizeMode="contain"
                  style={{ width: 30, height: 30, tintColor: tintColor }}
                  source={icons.call}
                />
              );
            case "Setting":
              return (
                <Image
                  resizeMode="contain"
                  style={{ width: 30, height: 30, tintColor: tintColor }}
                  source={icons.setting}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Chats"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
