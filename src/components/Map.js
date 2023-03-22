import "../_mockLocation";
import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Text } from "react-native";
import * as Location from "expo-location";
import { Context as LocationContext } from "../context/locationContext";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const {
    addLocation,
    state: { currentLocation },
  } = useContext(LocationContext);

  const startWatching = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Please enable location services");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      (location) => {
        addLocation(location);
      }
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

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
