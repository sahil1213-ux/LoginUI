import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {storeColors} from '../../utils/colors';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: storeColors.appBackgroundColor}}>
      <View className="flex-1 justify-around my-4 ">
        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/AuthImages/Display.png')}
            className="h-80 w-80 rounded-xl"
          />
        </View>
        <View className="space-y-2">
          <TouchableOpacity
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
            onPress={() => navigation.push('SignUp')}>
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="font-semibold text-white">
              already have an account
            </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-yellow-300 font-bold"> Login In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
