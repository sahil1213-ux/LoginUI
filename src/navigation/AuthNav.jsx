import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import WelcomeScreen from '../Screens/Auth/WelcomeScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import StoreScreen from '../Screens/Home/StoreScreen';
import SplashScreen from '../Screens/Auth/SplashScreen';

export default function AuthNav() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
    </Stack.Navigator>
  );
}

// * Options for configuring the screen appearance in the navigation stack.
// *
// * @typedef {Object} ScreenOptionStyle
// * @property {boolean} headerShown - Specifies whether the header should be shown or hidden.
// * @property {string} [headerTitle] - The title to be displayed in the header.
// * @property {string} [headerTitleAlign] - The alignment of the header title.
// * @property {string} [headerTintColor] - The color of the header text and icons.
// * @property {string} [headerStyle] - The style object for the header.
// * @property {string} [headerBackground] - The background color or image for the header.
// * @property {boolean} [headerTransparent] - Specifies whether the header should be transparent.
// * @property {boolean} [headerBackTitleVisible] - Specifies whether the back button title should be visible.
// * @property {boolean} [headerBackTitleStyle] - The style object for the back button title.
// * @property {boolean} [headerLeft] - The custom component to render on the left side of the header.
// * @property {boolean} [headerRight] - The custom component to render on the right side of the header.
