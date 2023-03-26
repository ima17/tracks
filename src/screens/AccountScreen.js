import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "@rneui/base";
import Spacer from "../components/spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Sign Out from Tracker</Text>
      </Spacer>

      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default AccountScreen;
