import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Bars3CenterLeftIcon} from 'react-native-heroicons/solid';
import {Categories, Games, featuredCategories} from '../../constants/usedLists';
import {storeColors} from '../../utils/colors';
import GameCard from '../../Components/StoreScreenComp/GameCard';
import TopPicked from '../../Components/StoreScreenComp/TopPicked';
import CustomHeartIcon from '../../Components/StoreScreenComp/CustomHeartIcon';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function StoreScreen() {
  return (
    <LinearGradient
      colors={['rgba(58,131,244,0.4)', 'rgba(9,181,211,0.4)']}
      className="flex-1 w-full">
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="container">
            <View className="flex-row justify-between items-center px-4">
              <Bars3CenterLeftIcon size={24} color={storeColors.Text} />
              <CustomHeartIcon />
            </View>
            {/* categories */}
            <View className="mt-2 space-y-3">
              <Text
                style={{color: storeColors.Text}}
                className="ml-4 text-3xl font-bold">
                Browse Games
              </Text>
              <View className="pl-4">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {Categories &&
                    Categories.map(item => {
                      return item.id === 1 ? (
                        <TouchableOpacity
                          key={item.id}
                          className="bg-blue-1000 p-1.5 px-2 rounded-full m-0.5">
                          <Text style={{color: 'white'}}>{item.name}</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          key={item.id}
                          className="bg-blue-200 p-1.5 px-2 rounded-full m-0.5">
                          <Text style={{color: 'black'}}>{item.name}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              </View>
            </View>
            {/* featured games */}
            <View className="ml-3 space-y-3 " style={{height: formheight}}>
              <Text
                className="ml-1.5 text-lg font-bold text-1.5xl"
                style={{color: 'black'}}>
                featured Games
              </Text>
              <View className="pl-0.2">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {featuredCategories &&
                    featuredCategories.map((item, index) => {
                      return (
                        // game card component
                        <GameCard key={index} game={item} />
                      );
                    })}
                </ScrollView>
              </View>
            </View>

            {/* Top Games Picked for you*/}
            <View className="mt-3 pl-2 pr-3">
              <View className="flex-row justify-between items-center mb-2">
                <Text
                  className="ml-1.5 text-lg font-bold text-1.5xl"
                  style={{color: 'black'}}>
                  Top Picked Games For you
                </Text>
                <TouchableOpacity>
                  <Text className="text-blue-600 font-bold text-1xl">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Games List */}
              <ScrollView
                // style={{height: 400}}
                showsVerticalScrollIndicator={false}>
                {Games &&
                  Games.map((item, index) => (
                    <TopPicked item={item} index={index} />
                  ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
