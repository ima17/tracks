import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/trackContext";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const track = state.find((t) => t._id === _id);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>{track.name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
