import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { NavigationEvents } from "@react-navigation/compat";
import { Context as TrackContext } from "../context/trackContext";
import { ListItem } from "@rneui/base";
import { navigate } from "../navigationRefs";

const TrackListScreen = () => {
  const { fetchTracks, state } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={() => fetchTracks()} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <ScrollView style={styles.listStyle}>
              <TouchableOpacity
                onPress={() => {
                  navigate("TrackDetail", { _id: item._id, name: item.name });
                }}
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            </ScrollView>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default TrackListScreen;
