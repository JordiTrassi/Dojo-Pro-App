import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LogOutButton_Styles';

const logOutIcon = {
  uri: 'https://www.seekpng.com/png/full/351-3512254_png-file-transparent-background-logout-icon.png',
};

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
