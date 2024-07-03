import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function TextField({
  headingTxt,
  placeholder,
  value,
  isSecure,
  onChangeText,
  onSubmitEditing,
  ref,
}) {
  return (
    <View>
      <Text className="text-gray-700 ml-2">{headingTxt}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        className="py-2 bg-red-50 rounded-2xl pl-4"
        secureTextEntry={isSecure}
        onChangeText={onChangeText}
        returnKeyType="next"
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        ref={ref}
      />
    </View>
  );
}
