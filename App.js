import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from "./screens/LogInScreen";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Poppins_500Medium, useFonts} from "@expo-google-fonts/poppins";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {useState} from "react";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};



export default function App() {
  const [selectedUser , setSelectedUser] = useState()
  let [fontsLoaded] = useFonts({Poppins_500Medium})

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator
      initialRouteName="Log In"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Log In">
        {(props) => <LogInScreen {...props} setCurrentUser={setSelectedUser} />}
      </Stack.Screen>
      <Stack.Screen name="Sign Up">
        {(props) => <SignUpScreen {...props} setCurrentUser={setSelectedUser} />}
      </Stack.Screen>
      <Stack.Screen name="Edit Profile">
        {(props) => <ProfileScreen {...props} currentUser={selectedUser} setCurrentUser={setSelectedUser} />}
      </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
