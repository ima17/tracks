import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const isSignedIn = false;

function Home() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return isSignedIn ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
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

export default App;
