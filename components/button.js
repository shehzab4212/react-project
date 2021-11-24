import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Functional Component (React Component)
const Button = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={[{ backgroundColor: props.color || "brown" }, styles.button]}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>Click Me</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "red",
    padding: 20,
    width: 200,
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 10,
  },
});
