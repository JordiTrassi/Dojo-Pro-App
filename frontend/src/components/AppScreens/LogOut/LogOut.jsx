/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import logOutCurrentUser from '../../../redux/actions/actionLogOut';
import styles from './LogOut_styles';
import { imageBckGrdLogOut, imageLogoutTitle } from '../../../assets/ImagesAndIcons';

export default function Logout() {
  const onPressLogin = useNavigation();
  let { isAuthenticated } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  // const userRefershToken = useSelector((store) => store.user.refreshToken);

  useEffect(() => {
    if (isAuthenticated === true) {
      isAuthenticated = false;
      dispatch(logOutCurrentUser(isAuthenticated));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={imageBckGrdLogOut}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Image source={imageLogoutTitle} style={styles.image_logout_title} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.button_login}
          onPress={() => {
            onPressLogin.navigate('LoginScreen');
          }}
        >
          <Text style={styles.btn_login_text}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
