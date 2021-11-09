/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './Profile_Styles';
import {
  imageBambo, studentsIcon, calendarIcon, pencilIcon, checkIcon,
} from '../../../assets/ImagesAndIcons';
import { getCurrentUser } from '../../../redux/actions/actionUser';

export default function Profile({ navigation }) {
  const onPressEditUser = () => { navigation.navigate('EditProfileScreen'); };
  const onPressStudents = () => { navigation.navigate('StudentsHeaderScreen'); };
  const onPressClassesList = () => { navigation.navigate('ClassesListScreen'); };
  const onPressAssistanceControl = () => { navigation.navigate('AssistanceControlScreen'); };

  const dispatch = useDispatch();

  const currentUserId = useSelector((store) => store.login);
  const userId = currentUserId.user._id;

  async function loadCurrentUser() {
    await dispatch(getCurrentUser(userId));
  }
  const currentUser = useSelector((store) => store.user);
  useEffect(() => {
    loadCurrentUser();
  }, []);
  const currentUserPhoto = { uri: currentUser.photo };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
          // resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        >
          <Svg viewBox="0 0 131.88 134.69" style={styles.avatar_circle}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              cx={67}
              cy={67}
              rx={67}
              ry={67}
              fill="rgba(230, 230, 230,0.37)"
            />
            <Image
              source={currentUserPhoto}
              name="user-avatar"
              style={styles.icon_avatar}
            />
          </Svg>
          <TouchableOpacity
            onPress={onPressStudents}
            style={styles.btn_students}
          >
            <Image
              source={studentsIcon}
              name="users"
              style={styles.icon_students}
            />
            <Text
              placeholder="Students"
              style={styles.textStudents}
            >
              Students
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressClassesList}
            style={styles.btn_classes}
          >
            <Image
              source={calendarIcon}
              name="calendar"
              style={styles.icon_calendar}
            />
            <Text
              placeholder="Classes"
              style={styles.text_classes}
            >
              Classes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressEditUser}
            style={styles.btn_editUser}
          >
            <Image
              source={pencilIcon}
              name="pencil"
              style={styles.icon_pencil}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressAssistanceControl}
            style={styles.btn_assistanceControl}
          >
            <View style={styles.assistanceControlStack}>
              <Text style={styles.text_assistanceControl}>Assistance Control</Text>
              <Image
                source={checkIcon}
                name="checkbox-marked-outline"
                style={styles.icon_checkBox}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.user_info}>
            {currentUser.name}
            {'\n'}
            {currentUser.surname}
            {'\n'}
            {'\n'}
            {currentUser?.disciplines?.map((dis) => (
              <Text style={styles.user_info_disciplines}>
                {dis.discipline}
                {': '}
                {dis.degree}
                {'\n'}
              </Text>
            ))}
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
