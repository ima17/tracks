import "../_mockLocation";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
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
        <Polyline coordinates={locations.map((location) => location.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default Map;
