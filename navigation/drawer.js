import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsNavigator from "./tabs";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ route }) => {
  return (
    <Drawer.Navigator initialRouteName="Account">
      <Drawer.Screen
        options={{ headerShown: false, title: "Account Setting" }}
        name="Setting_Drawer"
        component={TabsNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
