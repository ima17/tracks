import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { signup, state } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text style={styles.error}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Signup" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign In instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  error: {
    marginTop: 15,
    marginLeft: 15,
    color: "red",
    fontSize: 16,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;
