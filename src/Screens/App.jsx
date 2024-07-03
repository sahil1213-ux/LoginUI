// import {View, Text} from 'react-native';
/**
 * Imports
 * //navigation drawer
 * npm install @react-navigation/drawer
 * npm install react-native-gesture-handler react-native-reanimated
 * // bottom
 * npm install @react-navigation/bottom-tabs
 * // navigation stack
 *     "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.9.26",
    "nativewind": "^2.0.11",
    "react": "18.2.0",
    "react-native": "0.74.2",
    "react-native-heroicons": "^4.0.0",
    "react-native-safe-area-context": "^4.10.5",
    "react-native-screens": "^3.32.0",
    "react-native-svg": "^15.3.0"
    // bottomsheet
    npm install @gorhom/bottom-sheet@^4
    //mmkv
    npm i react-native-mmkv
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from '../navigation/AuthNav';
import {MMKV} from 'react-native-mmkv';

// export const storage = MMKV();

export default function App() {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
}
