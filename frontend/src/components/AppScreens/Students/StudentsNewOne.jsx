/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Svg, { Ellipse } from 'react-native-svg';
import { imageBambo, cameraIcon } from '../../../assets/ImagesAndIcons';
import Header from '../Header/Header';
import { upNewInfo, getCurrentUser } from '../../../redux/actions/actionUser';
import styles from './StudentsNewOne_Styles';
import PhotoPopupStudents from './PhotoPopupStudents';

export default function StudentsNewOne({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [degree, setDegree] = useState('');
  const dispatch = useDispatch();

  const currentUser = useSelector((store) => store.user);
  const userId = useSelector((store) => store.user._id);
  const currentUserPhoto = { uri: currentUser.photo };

  const [showPhotoPopup, setShowPhotoPopup] = useState(false);

  let validName = currentUser.name;
  let validSurname = currentUser.surname;
  let validDiscipline = ('');
  let validDegree = ('');

  function validateDataProfile() {
    let isValid = false;
    if (name.length > 0 && name.length < 10) {
      validName = name;
      isValid = true;
    }
    if (surname.length > 0 && surname.length < 15) {
      validSurname = surname;
      isValid = true;
    }
    if (discipline.length > 0) {
      validDiscipline = discipline;
      isValid = true;
    }
    if (degree.length > 0) {
      validDegree = degree;
      isValid = true;
    }
    return isValid;
  }
  const openPhotoPopup = () => {
    setShowPhotoPopup(true);
  };

  async function handleUpdate() {
    if (!validateDataProfile()) {
      return;
    }
    await dispatch(upNewInfo(userId, validName, validSurname, validDiscipline, validDegree));
    dispatch(getCurrentUser(userId));

    navigation.navigate('ProfileScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
        //   resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        />
        <Text style={styles.newStudentInfo}>Enter New Student Info:</Text>
        <Svg viewBox="0 0 131.88 134.69" style={styles.avatar_circle}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            cx={66}
            cy={67}
            rx={66}
            ry={67}
            fill="rgba(230, 230, 230,0.78)"
          />
          <Image
            source={currentUserPhoto}
            name="user-avatar"
            style={styles.icon_avatar}
          />
        </Svg>
        <View style={styles.rect_name}>
          <TextInput
            style={styles.inputInfo}
            onChangeText={(userName) => setName(userName)}
            value={name}
            placeholder="Student Name"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.rect_surname}>
          <TextInput
            style={styles.inputInfo}
            onChangeText={(userSurname) => setSurname(userSurname)}
            value={surname}
            placeholder="Student Surname"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rect_discipline}>
          <TextInput
            style={styles.inputInfo}
            onChangeText={(userDiscipline) => setDiscipline(userDiscipline)}
            value={discipline}
            placeholder="Student Discipline"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rect_degree}>
          <TextInput
            style={styles.inputInfo}
            onChangeText={(userDegree) => setDegree(userDegree)}
            value={degree}
            placeholder="Student Degree"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          onPress={() => handleUpdate()}
          style={styles.btn_upgrade}
        >
          <Text style={styles.upgrade}>Upgrade new Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openPhotoPopup()}
          style={styles.btn_camera}
        >

          <Image
            source={cameraIcon}
            name="camera"
            style={styles.icon_camera}
          />
        </TouchableOpacity>
        <PhotoPopupStudents isVisible={showPhotoPopup} setVisible={setShowPhotoPopup} />
      </View>
    </SafeAreaView>
  );
}

StudentsNewOne.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
