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
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import logOutCurrentUser from '../../../redux/actions/actionLogOut';
import styles from './LogOut_styles';
import { imageBckGrdLogOut, imageLogoutTitle } from '../../../assets/ImagesAndIcons';

export default function Logout({ navigation }) {
  const onPressLogIn = () => { navigation.navigate('LoginScreen'); };
  // const dispatch = useDispatch();

  const userRefershToken = useSelector((store) => store.user.refreshToken);

  // useEffect(() => {
  //   logOutCurrentUser(userId);
  // }, []);

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
          onPress={onPressLogIn}
        >
          <Text style={styles.btn_login_text}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

Logout.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
