import React, { useContext, useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { NavigationEvents } from "@react-navigation/compat";
import { Context as TrackContext } from "../context/trackContext";
import { ListItem, Text } from "@rneui/base";
import { navigate } from "../navigationRefs";

const TrackListScreen = () => {
  const { fetchTracks, state } = useContext(TrackContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTracks().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          fetchTracks();
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      ) : state.length === 0 ? (
        <Text style={styles.defaultText}>
          Created tracks will be shown here..
        </Text>
      ) : (
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
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultText: {
    margin: 15,
  },
});

export default TrackListScreen;
