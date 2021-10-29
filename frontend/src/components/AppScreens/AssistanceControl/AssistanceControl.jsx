import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

import Header from '../Header/Header';
import ClassSelector from './AssistanceClassSelector';
import AssistanceSwiper from './AssitanceSwiperStudents';

import styles from './AssistanceControl_styles';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};
const checkIcon = {
  uri: 'https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-4/24/5091-512.png',
};

export default function Assistance() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
          resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        />
        <View style={styles.title_rectangle}>
          <Image
            source={checkIcon}
            resizeMode="contain"
            style={styles.check_icon}
          />
          <Text style={styles.title_assistance}>ASSISTANCE CONTROL</Text>
        </View>
        <View>
          <View style={styles.rect_assist_class}>
            <ClassSelector />
          </View>
        </View>
        <View style={styles.swipe_container}>
          <AssistanceSwiper />
        </View>

      </View>
    </SafeAreaView>
  );
}
