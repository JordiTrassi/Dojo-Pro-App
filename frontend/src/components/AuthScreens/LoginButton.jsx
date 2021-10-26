import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Main_Styles';

export default function LoginBtn() {
  const onPressLogin = useNavigation();

  return (
    <TouchableOpacity
      testID="loginBtn"
      style={styles.button2}
      onPress={() => {
        onPressLogin.navigate('LoginScreen');
      }}
    >
      <Text style={styles.logIn}>Log In</Text>
    </TouchableOpacity>
  );
}
