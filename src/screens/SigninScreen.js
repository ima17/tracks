import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import Navilink from "../components/NavLink";
import { NavigationEvents } from "@react-navigation/compat";

const SignupScreen = ({ navigation }) => {
  const { signin, state, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(() => {
    navigation.addListener("blur", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => {
          signin({ email, password });
        }}
      />
      <Navilink
        text="Don't have an account? Sign Up instead."
        routeName="Signup"
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
