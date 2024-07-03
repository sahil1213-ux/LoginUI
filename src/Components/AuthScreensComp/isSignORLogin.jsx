import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function IsSignORLogin({text, onPress}) {
  return (
    <View className="flex-row justify-center mt-3">
      <Text className="font-semibold text-black">{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="text-yellow-500 font-bold"> {text}</Text>
      </TouchableOpacity>
    </View>
  );
}
