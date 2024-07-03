import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {storeColors} from '../../utils/colors';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import TextField from '../../Components/AuthScreensComp/TextField';
import CustomBtn from '../../Components/AuthScreensComp/CustomBtn';
import {DiifSourceSignLogin} from '../../Components/AuthScreensComp/DiifSourceSignLogin';
import IsSignORLogin from '../../Components/AuthScreensComp/isSignORLogin';
import {storage} from '../../constants/storage';
import * as yup from 'yup';
import {postDataApi} from '../../services/AuthServices/User';
export default function SignUpScreen() {
  const navigation = useNavigation();

  // Step 2: Initialize an Animated.Value for opacity
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const validationSchema = yup.object().shape({
    fullName: yup.string().required('Full name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      console.log('Form data is valid:', formData);
      // Proceed with submitting form data
      saveUser = await postDataApi('http://192.168.0.106:3000/User', formData);
      if (saveUser === 'success') {
        storage.set('isLoggedIn', true);
        navigation.replace('Store');
      } else {
        console.log('Error in saving user');
      }
    } catch (error) {
      console.error('Validation errors:', error.inner);
    }
  };

  useEffect(() => {
    // Step 3: Use Animated.timing to animate the opacity
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to fully visible
      duration: 1000, // 1000 milliseconds = 1 second
      useNativeDriver: true, // Add this line
    }).start();
  }, [fadeAnim]);

  // Create refs for each TextField
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <View
      className="flex-1 bg-blue-500"
      style={{backgroundColor: storeColors.appBackgroundColor}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 p-1 rounded-tr-2xl rounded-bl-2xl m-2"
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={28} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/AuthImages/Display.png')}
            style={{height: 120, width: 120, borderRadius: 30}}
            // className=" h-72 w-72 rounded-xl"
          />
        </View>
      </SafeAreaView>
      <Animated.View
        className="flex-1 bg-white mt-4 px-8 py-6"
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
          flex: 1,
          backgroundColor: 'white',
          marginTop: 4,
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View className="form space-y-2">
          <TextField
            headingTxt="Full Name"
            placeholder="Enter Name"
            onChangeText={text => setFormData({...formData, fullName: text})}
            value={formData.fullName}
            isSecure={false}
            onSubmitEditing={() => emailRef.current.focus()}
            ref={fullNameRef}
          />
          <TextField
            headingTxt="Email"
            placeholder="Enter Email"
            onChangeText={text => setFormData({...formData, email: text})}
            value={formData.email}
            isSecure={false}
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
          />
          <TextField
            headingTxt="Password"
            placeholder="Enter Password"
            onChangeText={text => setFormData({...formData, password: text})}
            value={formData.password}
            isSecure={true}
            ref={passwordRef}
          />

          <CustomBtn text="Sign Up" onPress={handleSubmit} />
        </View>
        <Text className="text-lg text-gray-700 font-bold text-center pt-2 pb-2">
          Or
        </Text>
        <DiifSourceSignLogin />
        <IsSignORLogin
          text="Already have an account? "
          onPress={() => navigation.push('Login')}
        />
      </Animated.View>
    </View>
  );
}
