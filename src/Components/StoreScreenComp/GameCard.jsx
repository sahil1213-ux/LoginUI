import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {
  ArrowDownTrayIcon,
  HeartIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import storeColors from '../../utils/colors';

export default function GameCard({game}) {
  const {title, image, downloads, stars} = game;
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <View className="mr-1 relative">
      <FastImage
        source={image}
        className="w-60 h-40 rounded-3xl mr-2 resize-y"
        resizeMode="stretch"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.3)']}
        className="absolute pl-3 pr-3 pt-2 pb-1 h-full w-full flex justify-between rounded-3xl  ">
        <View className="flex-row justify-end relative">
          {title === 'Zomato' ? (
            <Text className="text-black-400 text-sm self-end justify-end absolute top-0 left-0">
              Promoted
            </Text>
          ) : null}
          {title === 'Zomato' ? null : (
            <TouchableOpacity
              className="rounded-full pb-2 pr-2"
              style={{backgroundColor: 'rgba(255,255,255,0)'}}
              onPress={() => setIsFavourite(!isFavourite)}>
              <HeartIcon
                size={20}
                color={
                  isFavourite ? storeColors.redHeart : storeColors.Background
                }
              />
            </TouchableOpacity>
          )}
        </View>
        <View className="absolute bottom-8 left-1 space-x-1 pl-1">
          <Text className="text-xl font-bold text-gray-300 pl-1">{title}</Text>
        </View>
        <View className="flex-row items-center space-x-1 pb-2">
          <ArrowDownTrayIcon size={18} color="lightgray" />
          <Text className="text-1xl font-semibold text-gray-300 ">
            {downloads} Downloads
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  conataine: {},
});
