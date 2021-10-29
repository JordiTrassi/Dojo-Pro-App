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
      testID="registerBtn"
      style={styles.button}
      onPress={() => {
        onPressLogin.navigate('RegisterScreen');
      }}
    >
      <Text style={styles.register}>Register</Text>
    </TouchableOpacity>
  );
}
