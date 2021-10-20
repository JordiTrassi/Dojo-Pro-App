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
import ClassSelector from './AssistanceClassSelector';
import AssistanceSwiper from './AssitanceSwiperStudents';

import styles from './AssistanceControl_styles';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};
const toriIcon = {
  uri: 'https://cdn1.iconfinder.com/data/icons/japan-line-2/48/Japan_Japanese-59-1024.png',
};
const logOutIcon = {
  uri: 'https://www.seekpng.com/png/full/351-3512254_png-file-transparent-background-logout-icon.png',
};
const checkIcon = {
  uri: 'https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-4/24/5091-512.png',
};

export default function Assistance({ navigation }) {
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
          <Image
            source={checkIcon}
            resizeMode="contain"
            style={styles.tori_icon}
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

Assistance.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
