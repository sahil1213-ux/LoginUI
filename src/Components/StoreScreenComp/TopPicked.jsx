import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ArrowDownTrayIcon, StarIcon} from 'react-native-heroicons/solid';
import storeColors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function TopPicked({item, index}) {
  // Directly return the conditional rendering result
  return item.title === 'Zomato' ? null : (
    <TouchableOpacity key={index} className="mx-1 flex-row items-start">
      <FastImage
        source={item.image}
        style={{height: 70, width: 70}}
        className="rounded-2xl mb-1"
      />
      <View className="flex-1 flex-row justify-center space-y-1 ">
        <View className="flex-1 justify-center flex pl-3">
          <Text className="text-sm font-semibold text-black ">
            {item.title}
          </Text>
          <View className="space-x-2 items-center flex-row">
            <View className="flex-row space-x-1 items-center">
              <StarIcon size={10} color={storeColors.yellowStar} />
              <Text className="pl-1 text-sm text-gray-700">
                {item.stars} stars
              </Text>
            </View>
            <View className="flex-row space-x-1 items-center pl-2">
              <ArrowDownTrayIcon size={18} color="gray" />
              <Text className="text-sm text-gray-700">{item.downloads}</Text>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={['rgba(58,131,244,0.4)', 'rgba(9,181,211,0.4)']}
          style={{borderRadius: 8}}>
          <Text
            className="text-white px-1 py-2 text-center flex"
            style={{
              color: 'white',
              paddingVertical: 4,
              paddingHorizontal: 8,
              flex: 1,
              textAlign: 'center',
            }}>
            Download
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
