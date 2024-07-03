import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomBtn({text, onPress}) {
  return (
    <TouchableOpacity
      className="py-2 bg-yellow-500 rounded-xl"
      onPress={onPress}>
      <Text className="font-bold text-center text-lg">{text}</Text>
    </TouchableOpacity>
  );
}
