import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export function DiifSourceSignLogin() {
  const params = {
    height: 25,
    width: 25,
  };
  return (
    <View className="flex-row justify-center space-x-5">
      <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
        <Image
          source={require('../../assets/images/AuthImages/Google.png')}
          style={{...params}}
        />
      </TouchableOpacity>
      <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
        <Image
          source={require('../../assets/images/AuthImages/Apple.png')}
          style={{...params}}
        />
      </TouchableOpacity>
      <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
        <Image
          source={require('../../assets/images/AuthImages/Facebook.png')}
          style={{...params}}
        />
      </TouchableOpacity>
    </View>
  );
}
