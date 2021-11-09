import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import styles from './StudentsHeader_Styles';
import { imageBambo } from '../../../assets/ImagesAndIcons';
import Header from '../Header/Header';
import Studentscard from './StudentsCard';

export default function StudentsHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
          // resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        />
        <View style={styles.title_rectangle}>
          <Text style={styles.title_students}>STUDENTS</Text>
        </View>
        <View>
          <Studentscard />
        </View>
      </View>
    </SafeAreaView>
  );
}
