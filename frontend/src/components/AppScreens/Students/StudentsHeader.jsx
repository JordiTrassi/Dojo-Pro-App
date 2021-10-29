import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import styles from './StudentsHeader_Styles';
import Header from '../Header/Header';
import Studentscard from './StudentsCard';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};

export default function StudentsHeader() {
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
          <Text style={styles.title_students}>STUDENTS</Text>
        </View>
        <View>
          <Studentscard />
        </View>
      </View>
    </SafeAreaView>
  );
}
