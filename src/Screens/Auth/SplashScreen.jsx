import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {storage} from '../../constants/storage';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  // Step 2: Initialize an Animated.Value
  const scaleValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useEffect(() => {
    // Step 3: Animate the scale value
    setTimeout(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        isLoggedIn();
      }, 2000);
    }, 1000);
  }, [scaleValue]);

  const isLoggedIn = () => {
    const isLoggedin = storage.getBoolean('isLoggedIn');
    if (isLoggedin) {
      navigation.replace('Home');
    } else {
      navigation.replace('Welcome');
    }
  };

  return (
    <Animated.View style={styles.container}>
      {/* Step 4: Apply the animated scale value */}
      <Animated.Image
        source={require('../../assets/images/AuthImages/AppStore.png')}
        style={[
          styles.image,
          {
            transform: [{scale: scaleValue}],
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100, // Set your desired starting size
    height: 100, // Set your desired starting size
    resizeMode: 'contain',
    borderRadius: 70,
  },
});

export default SplashScreen;

// import React, {useEffect} from 'react';
// import {Image, StyleSheet} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from 'react-native-reanimated';
// import {storage} from '../../constants/usedLists';

// const SplashScreen = () => {
//   // Step 2: Initialize a shared value for scale
//   const scaleValue = useSharedValue(0);

//   useEffect(() => {
//     // Step 5: Animate the scale value with a bouncing effect
//     setTimeout(() => {
//       scaleValue.value = withSpring(1, {
//         damping: 2, // Lower damping for more bounce
//         stiffness: 150, // Adjust stiffness for the speed of the bounce
//         mass: 1, // Adjust mass for the effect of "weight" in the bounce
//       });
//       setTimeout(() => {
//         isLoggedIn();
//       }, 1000);
//     }, 1000);
//   }, []);

//   const isLoggedIn = () => {
//     const isLoggedin = storage.getBool('isLogged');
//     if (isLoggedin) {
//       navigation.replace('Home');
//     } else {
//       navigation.replace('Login');
//     }
//   };

//   // Step 3: Use the animated style
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{scale: scaleValue.value}],
//     };
//   });

//   return (
//     <Animated.View style={styles.container}>
//       {/* Step 4: Apply the animated style */}
//       <Animated.Image
//         source={require('../../assets/images/AuthImages/AppStore.png')}
//         style={[styles.image, animatedStyle]}
//       />
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100, // Set your desired starting size
//     height: 100, // Set your desired starting size
//   },
// });

// export default SplashScreen;
