/* eslint-disable react/prop-types */
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
import Toast from 'react-native-simple-toast';
import { size } from 'lodash';
import validateEmail from '../../utils/validateEmail';
import confirm from '../../redux/actions/actionRegister';
import styles from './Register_Style';
import { imageBckGrd, titleImage } from '../../assets/ImagesAndIcons';

export default function Register({ navigation }) {
  const onPressMain = () => { navigation.navigate('MainScreen'); };

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateData = () => {
    let isValid = true;

    if (name.length === 0 || name.length > 10) {
      Toast.show('Minim Name characters 2 and maxim 10');
      isValid = false;
    }
    if (!validateEmail(email)) {
      Toast.show('The Email is not valid.');
      isValid = false;
    }
    if (size(password) < 6) {
      Toast.show('Password is short, minimum 6 characters');
      isValid = false;
    }
    if (size(confirmPassword) < 6) {
      Toast.show('Confirm password is short, minimum 6 characters');
      isValid = false;
    }
    if (password !== confirmPassword) {
      Toast.show('Password and Confirm Password are diferent');
      isValid = false;
    }

    return isValid;
  };

  function handleRegister() {
    if (!validateData()) {
      return;
    }
    dispatch(confirm(name, email, password));
    navigation.navigate('LoginScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_Stack}>
        <ImageBackground
          source={imageBckGrd}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <TouchableOpacity
            testID="mainScreenButton"
            onPress={onPressMain}
          >
            <Image source={titleImage} style={styles.titleimage} />
          </TouchableOpacity>
          <Text style={styles.user_name_title}>User Name</Text>
          <View style={styles.rect_name}>
            <TextInput
              style={styles.input_user_name}
              onChangeText={(userName) => setName(userName)}
              value={name}
              placeholder="Name"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.email_title}>E-mail</Text>
          <View style={styles.rect_email}>
            <TextInput
              style={styles.input_email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              value={email}
              placeholder="user@email.com"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.password_title}>Password</Text>
          <View style={styles.rect_password}>
            <TextInput
              style={styles.input_password}
              onChangeText={(pass) => setPassword(pass)}
              value={password}
              secureTextEntry
              placeholder="*******************"
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.confirm_password_title}>Confirm Password</Text>
          <View style={styles.rect_password_two}>
            <TextInput
              style={styles.input_password}
              onChangeText={(pass2) => setConfirmPassword(pass2)}
              value={confirmPassword}
              secureTextEntry
              placeholder="*******************"
              autoCapitalize="none"
            />
          </View>

        </ImageBackground>
        <TouchableOpacity
          testID="confirmBtn"
          onPress={() => handleRegister()}
          style={styles.button_confirm}
        >
          <Text style={styles.confirmBtn}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
