/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import logIn from '../../redux/actions/actionLogIn';
import validateEmail from '../../utils/validateEmail';
import styles from './Login_Styles';
import { imageBckGrd, titleImage } from '../../assets/ImagesAndIcons';

export default function Login({ navigation }) {
  const onPressMain = () => { navigation.navigate('MainScreen'); };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleLogIn() {
    if (validateEmail(email)) {
      dispatch(logIn(email, password));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={imageBckGrd}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <TouchableOpacity
            testID="mainScreenButton"
            onPress={onPressMain}
          >
            <Image source={titleImage} style={styles.titleimage} />
          </TouchableOpacity>
          <Text style={styles.eMail}>E-mail</Text>
          <View style={styles.rect_email}>
            <TextInput
              testID="userInputEmail"
              style={styles.input_email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              value={email}
              placeholder="user@email.com"
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.password}>Password</Text>
          <View style={styles.rect_password}>
            <TextInput
              testID="userInputPassword"
              style={styles.input_password}
              onChangeText={(pass) => setPassword(pass)}
              value={password}
              secureTextEntry
              placeholder="*******************"
              autoCapitalize="none"
            />
          </View>

        </ImageBackground>
        <TouchableOpacity
          testID="loginBtn"
          style={styles.button_signin}
          onPress={() => handleLogIn()}
        >
          <Text style={styles.btn_login_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
