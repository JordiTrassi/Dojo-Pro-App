import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Main_Styles';
import LoginBtn from './LoginButton';
import RegisterBtn from './RegisterButton';

const image = {
  uri: 'https://www.robinju.com/wp-content/uploads/2012/10/Fushimi-Inari-011.jpg',
};
const titleimage = {
  uri: 'https://fontmeme.com/permalink/210902/8337e2e2aeed704e1256a194f328c52c.png',
};

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.image}
        >
          <Image source={titleimage} style={styles.titleimage} />
        </ImageBackground>
        <LoginBtn />
        <RegisterBtn />
      </View>
    </SafeAreaView>
  );
}
