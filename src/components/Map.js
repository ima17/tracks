import "../_mockLocation"
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Text } from "react-native";
import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let points = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.78825 + i * 0.001,
        longitude: -122.4324 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.78825 - i * 0.002,
        longitude: -122.4324 + i * 0.002,
      });
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Please enable location services");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={points} />
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
