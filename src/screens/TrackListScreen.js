import React, { useContext } from "react";
import { FlatList, TouchableOpacity, ScrollView } from "react-native";
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
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  navigate("TrackDetail", { _id: item._id, name: item.name });
                }}
              >
                <ListItem bottomDivider topDivider>
                  <ListItem.Title>{item.name}</ListItem.Title>
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
export default TrackListScreen;
