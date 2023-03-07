import React from "react";
import Spacer from "./spacer";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "@react-navigation/compat";

const Navilink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(Navilink);
