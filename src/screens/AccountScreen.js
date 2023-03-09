import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "@rneui/base";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Spacer>
        <Text h3>Sign Out from Tracker</Text>
      </Spacer>

      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
