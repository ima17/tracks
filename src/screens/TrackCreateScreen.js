import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@rneui/base";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Track Create Screen</Text>
      <Map/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
