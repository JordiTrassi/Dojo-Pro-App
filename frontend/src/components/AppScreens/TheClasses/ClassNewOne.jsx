/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from 'react-native-simple-toast';
import RNPickerSelect from 'react-native-picker-select';
import styles from './ClassNewOne_Styles';
import { createNewClass } from '../../../redux/actions/actionClasses';
import { getCurrentUser } from '../../../redux/actions/actionUser';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};
const toriIcon = {
  uri: 'https://cdn1.iconfinder.com/data/icons/japan-line-2/48/Japan_Japanese-59-1024.png',
};
const logOutIcon = {
  uri: 'https://www.seekpng.com/png/full/351-3512254_png-file-transparent-background-logout-icon.png',
};

export default function ClassNewOne({ navigation }) {
  const onPressLogOut = () => { navigation.navigate('LogOutScreen'); };
  const onPressProfile = () => { navigation.navigate('ProfileScreen'); };

  const userId = useSelector((store) => store.user._id);
  const dispatch = useDispatch();
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [discipline, setDiscipline] = useState('');

  const pickerStyle = {
    inputIOS: {
      color: '#121212',
      paddingTop: 4,
      paddingHorizontal: 10,
      fontSize: 25,
      textAlign: 'center',
    },
    placeholderColor: '#121212',
    underline: { borderTopWidth: 0 },
    icon: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopWidth: 5,
      borderTopColor: '#00000099',
      borderRightWidth: 5,
      borderRightColor: 'transparent',
      borderLeftWidth: 5,
      borderLeftColor: 'transparent',
      width: 0,
      height: 0,
      top: 20,
      right: 15,
    },
  };

  const validateData = () => {
    let isValid = true;
    if (discipline.length === 0 || hour.length === 0 || day.length === 0) {
      Toast.show('Complet all form fields');
      isValid = false;
    }

    return isValid;
  };

  async function handleNewClass() {
    if (!validateData()) {
      return;
    }
    try {
      await dispatch(createNewClass(userId, day, hour, discipline));
      dispatch(getCurrentUser(userId));
    } catch {
      return;
    }

    navigation.navigate('ClassesListScreen');
  }

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
          <Text style={styles.title_create_new_class}>CREATE NEW CLASS</Text>
        </View>
        <View style={styles.form_new_class}>
          <Text style={styles.discipline_title}>Discipline:</Text>
          <View style={styles.rect_discipline}>
            <RNPickerSelect
              placeholder={{ label: 'Select the discipline', value: null }}
              onValueChange={(newDay) => setDiscipline(newDay)}
              style={pickerStyle}
              items={[
                { label: 'Karate', value: 'Karate' },
                { label: 'Kata', value: 'Kata' },
                { label: 'Kumite', value: 'Kumnite' },
                { label: 'Goshin', value: 'Goshin' },
              ]}
            />
          </View>

          <Text style={styles.day_title}>Day:</Text>
          <View style={styles.rect_day}>
            <RNPickerSelect
              placeholder={{ label: 'Select the class day', value: null }}
              onValueChange={(newDay) => setDay(newDay)}
              style={pickerStyle}
              items={[
                { label: 'Monday', value: 'Monday' },
                { label: 'Tuesday', value: 'Tuesday' },
                { label: 'Wednesday', value: 'Wednesday' },
                { label: 'Thursday', value: 'Thursday' },
                { label: 'Friday', value: 'Friday' },
                { label: 'Saturday', value: 'Saturday' },
              ]}
            />

            <Text style={styles.hour_title}>Hour:</Text>
            <View style={styles.rect_hour}>
              <RNPickerSelect
                placeholder={{ label: 'Select hour', value: null }}
                onValueChange={(newDay) => setHour(newDay)}
                style={pickerStyle}
                items={[
                  { label: '17:00', value: '17:00' },
                  { label: '18:00', value: '18:00' },
                  { label: '19:00', value: '19:00' },
                  { label: '20:00', value: '20:00' },
                  { label: '21:00', value: '21:00' },
                ]}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleNewClass()}
            style={styles.button_confirm}
          >
            <Text style={styles.confirmBtn}>Confirm New Class</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

ClassNewOne.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
