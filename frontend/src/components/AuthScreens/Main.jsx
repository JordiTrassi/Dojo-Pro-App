import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Main_Styles';

const image = {
  uri: 'https://www.robinju.com/wp-content/uploads/2012/10/Fushimi-Inari-011.jpg',
};
const titleimage = {
  uri: 'https://fontmeme.com/permalink/210902/8337e2e2aeed704e1256a194f328c52c.png',
};

export default function Main({ navigation }) {
  const onPressLogin = () => { navigation.navigate('LoginScreen'); };
  const onPressRegister = () => { navigation.navigate('RegisterScreen'); };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.image}
        >
          <Image source={titleimage} style={styles.titleimage} />
        </ImageBackground>
        <TouchableOpacity
          testID="loginBtn"
          style={styles.button2}
          onPress={onPressLogin}
        >
          <Text style={styles.logIn}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="registerBtn"
          style={styles.button}
          onPress={onPressRegister}
        >
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
