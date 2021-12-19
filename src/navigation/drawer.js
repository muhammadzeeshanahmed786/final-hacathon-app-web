// In App.js in a new project

import  React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../login-signup-screen/login"
import SplashScreen from "../login-signup-screen/splash.js"
import SignUpScreen from "../login-signup-screen/sign-up.js"
import HomeSec from "../screen/home"
import LocationMap from "../mapView/map"
import Form from '../screen/form'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen   name="Splash" component={SplashScreen}/>
        <Stack.Screen  name="Form" component={Form}/>
        <Stack.Screen  name="Home" component={HomeSec}/>
        <Stack.Screen  name="SignIn" component={SignInScreen}/>
        <Stack.Screen  name="SignUp" component={SignUpScreen}/>


        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;