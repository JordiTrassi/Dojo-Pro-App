/* eslint-disable no-underscore-dangle */
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
import Header from '../Header/Header';
import Classcards from './ClassCard';
import { imageBambo, plusIcon } from '../../../assets/ImagesAndIcons';
import styles from './ClassesList_Styles';

export default function ClassesList({ navigation }) {
  const onPressNewClass = () => { navigation.navigate('ClassNewOneScreen'); };

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
          <Text style={styles.title_classes}>CLASSES</Text>
          <TouchableOpacity
            onPress={onPressNewClass}
            style={styles.btn_new_class}
          >
            <Image
              source={plusIcon}
              name="newClass"
              style={styles.icon_plus}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Classcards />
        </View>
      </View>
    </SafeAreaView>
  );
}

ClassesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
