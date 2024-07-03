import {View, Text} from 'react-native';
import React from 'react';
import {HeartIcon} from 'react-native-heroicons/solid';
import storeColors from '../../utils/colors';

export default function CustomHeartIcon() {
  return (
    <View className="absolute">
      <HeartIcon size={24} color={storeColors.Text} />
      <View className="absolute top-0 right-0 p-2 rounded bg-white ">
        <Text>0</Text>
      </View>
    </View>
  );
}
