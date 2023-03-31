import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/base";
import Spacer from "../components/spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View>
        <Spacer>
          <Text h1 style={styles.title}>
            Sign Out from Tracker
          </Text>
        </Spacer>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});

export default AccountScreen;
