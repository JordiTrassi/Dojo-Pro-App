import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeButton_Styles';

const toriIcon = {
  uri: 'https://cdn1.iconfinder.com/data/icons/japan-line-2/48/Japan_Japanese-59-1024.png',
};

export default function HomeButton() {
  const onPressLogin = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn_home}
      onPress={() => {
        onPressLogin.navigate('ProfileScreen');
      }}
    >
      <Image
        source={toriIcon}
        resizeMode="contain"
        style={styles.tori_icon}
      />
    </TouchableOpacity>
  );
}
