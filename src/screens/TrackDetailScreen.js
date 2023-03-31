import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/spacer";
import { MAPSTYLE } from "../constants/mapStyle";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const tracks = state.find((t) => t._id === _id);
  const initialCoords = tracks.locations[0].coords;

  return (
    <>
      <Spacer>
        <Text style={{ fontSize: 48 }}>{tracks.name}</Text>
      </Spacer>
      <MapView
        customMapStyle={MAPSTYLE}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={tracks.locations.map((location) => location.coords)}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default TrackDetailScreen;
