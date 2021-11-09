import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './Main_Styles';
import { imageBckGrd, titleImage } from '../../assets/ImagesAndIcons';
import LoginBtn from './LoginButton';
import RegisterBtn from './RegisterButton';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={imageBckGrd}
          resizeMode="contain"
          style={styles.image}
        >
          <Image source={titleImage} style={styles.titleimage} />
        </ImageBackground>
        <LoginBtn />
        <RegisterBtn />
      </View>
    </SafeAreaView>
  );
}
