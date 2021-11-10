import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './StudentsHeader_Styles';
import { imageBambo, plusIcon } from '../../../assets/ImagesAndIcons';
import Header from '../Header/Header';
import Studentscard from './StudentsCard';

export default function StudentsHeader({ navigation }) {
  const onPressNewStudent = () => { navigation.navigate('StudentsNewOneScreen'); };

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
          <TouchableOpacity
            onPress={onPressNewStudent}
            style={styles.btn_new_student}
          >
            <Image
              source={plusIcon}
              name="newStudent"
              style={styles.icon_plus}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Studentscard />
        </View>
      </View>
    </SafeAreaView>
  );
}

StudentsHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
