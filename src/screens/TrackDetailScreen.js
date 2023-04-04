import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { MAPSTYLE } from "../constants/mapStyle";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const tracks = state.find((t) => t._id === _id);
  const initialCoords = tracks.locations[0].coords;

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={MAPSTYLE}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        {locations.length > 0 && (
          <Polyline
            coordinates={locations.map((location) => location.coords)}
          />
        )}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default TrackDetailScreen;
