import "../_mockLocation";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";
import { Text } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

const Map = () => {
  const [errorMsg] = useLocation((location) => addLocation(location));

  const {
    addLocation,
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default Map;
