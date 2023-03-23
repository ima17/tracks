import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@rneui/base";
import Map from "../components/Map";
import { useIsFocused } from "@react-navigation/native";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const [errorMsg] = useLocation(isFocused, (location) =>
    addLocation(location)
  );
  const { addLocation } = useContext(LocationContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create A Track</Text>
      <Map />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
