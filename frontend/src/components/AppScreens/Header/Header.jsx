import React from 'react';
import {
  View,
} from 'react-native';
import HomeButton from '../Buttons/HomeButton';
import LogOutButton from '../Buttons/LogOutButton';

import styles from './Header_Styles';

export default function Header() {
  return (
    <View style={styles.header}>

      <HomeButton />

      <LogOutButton />

    </View>

  );
}
