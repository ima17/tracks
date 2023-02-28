import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "../components/spacer";

const SignupScreen = () => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
