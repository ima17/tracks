import React, { useContext, useCallback } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@rneui/base";
import Map from "../components/Map";
import { useIsFocused } from "@react-navigation/native";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/spacer";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(recording, location),
    [recording]
  );
  const [errorMsg] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <ScrollView>
        <Spacer>
          <Text h2>Create a New Track</Text>
        </Spacer>
        <Map />
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        <TrackForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
