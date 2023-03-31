import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/locationContext";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/authContext";
import { Provider as TrackProvider } from "./src/context/trackContext";
import { useContext } from "react";
import { setNavigator } from "./src/navigationRefs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Tab.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: "Tracks" }}
      />
      <Tab.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const { state } = useContext(AuthContext);

  return state.token ? (
    <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
      <Tab.Navigator>
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome name="th-list" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="TrackCreate"
          component={TrackCreateScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome name="plus" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome name="gear" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen
            name="ResolveAuth"
            component={ResolveAuthScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
