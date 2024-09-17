import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashPage from './app/screens/SplashPage';
import LoginPage from './app/screens/Login'
import SignUp from './app/screens/SignUp'
import Dashboard from "./app/screens/Dashboard";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "SignUp" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
