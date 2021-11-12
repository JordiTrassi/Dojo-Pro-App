import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LogOutButton_Styles';
import { logOutIcon } from '../../../assets/ImagesAndIcons';

export default function LogOutButton() {
  const onPressLogin = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn_logout}
      onPress={() => {
        onPressLogin.navigate('LogOutScreen');
      }}
    >
      <Image
        source={logOutIcon}
        name="logout"
        style={styles.incon_logout}
      />
    </TouchableOpacity>
  );
}
