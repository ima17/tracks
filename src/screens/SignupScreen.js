import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import Navilink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { signup, state, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("blur", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => {
          signup({ email, password });
        }}
      />
      <Navilink
        text="Already have an account? Sign In instead."
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
