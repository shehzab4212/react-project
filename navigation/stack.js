import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/Chats";
import icons from "../constants/icons";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Chat App",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: colors.chatBackgroundColor,
            
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 15, height: 15,paddingHorizontal:20,tintColor:'white' }}
              />
            </TouchableOpacity>
          ),
        }}
        name="Home_Stack"
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
