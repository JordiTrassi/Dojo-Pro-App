import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './StudentsHeader_Styles';
import Studentscard from './StudentsCard';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};
const toriIcon = {
  uri: 'https://cdn1.iconfinder.com/data/icons/japan-line-2/48/Japan_Japanese-59-1024.png',
};
const logOutIcon = {
  uri: 'https://www.seekpng.com/png/full/351-3512254_png-file-transparent-background-logout-icon.png',
};

export default function StudentsHeader({ navigation }) {
  const onPressLogOut = () => { navigation.navigate('LogOutScreen'); };
  const onPressProfile = () => { navigation.navigate('ProfileScreen'); };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
          resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        />
        <TouchableOpacity
          onPress={onPressLogOut}
          style={styles.btn_logout}
        >
          <Image
            source={logOutIcon}
            resizeMode="contain"
            style={styles.incon_logout}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressProfile}
          style={styles.btn_profile}
        >
          <Image
            source={toriIcon}
            resizeMode="contain"
            style={styles.tori_icon}
          />
        </TouchableOpacity>
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

StudentsHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
