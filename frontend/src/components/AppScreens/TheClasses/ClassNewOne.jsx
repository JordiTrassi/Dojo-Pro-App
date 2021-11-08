/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from 'react-native-simple-toast';
import { Picker } from '@react-native-picker/picker';
import Header from '../Header/Header';
import styles from './ClassNewOne_Styles';
import { createNewClass } from '../../../redux/actions/actionClasses';
import { getCurrentUser } from '../../../redux/actions/actionUser';

const imageBambo = {
  uri: 'https://theshowroommag.com/wp-content/uploads/2020/01/1239x697.jpg',
};

export default function ClassNewOne({ navigation }) {
  const userId = useSelector((store) => store.user._id);
  const dispatch = useDispatch();
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [discipline, setDiscipline] = useState('');

  // const pickerStyle = {
  //   inputIOS: {
  //     color: '#121212',
  //     paddingTop: 4,
  //     paddingHorizontal: 10,
  //     fontSize: 25,
  //     textAlign: 'center',
  //   },
  //   placeholderColor: '#121212',
  //   underline: { borderTopWidth: 0 },
  //   icon: {
  //     position: 'absolute',
  //     backgroundColor: 'transparent',
  //     borderTopWidth: 5,
  //     borderTopColor: '#00000099',
  //     borderRightWidth: 5,
  //     borderRightColor: 'transparent',
  //     borderLeftWidth: 5,
  //     borderLeftColor: 'transparent',
  //     width: 0,
  //     height: 0,
  //     top: 20,
  //     right: 15,
  //   },
  // };

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
      <Header />
      <View style={styles.background_img_dashboartStack}>
        <ImageBackground
          source={imageBambo}
          resizeMode="contain"
          style={styles.background_img_dashboart}
          imageStyle={styles.background_img_dashboart_imageStyle}
        />
        <View style={styles.title_rectangle}>
          <Text style={styles.title_create_new_class}>CREATE NEW CLASS</Text>
        </View>
        <View style={styles.form_new_class}>
          <Text style={styles.form_title_camp}>Day:</Text>
          <View style={styles.rect_day}>
            <Picker
              placeholder={{ label: 'Select the class day', value: null }}
              selectedValue={day}
              onValueChange={(newDay) => setDay(newDay)}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
            </Picker>
          </View>
          <Text style={styles.form_title_camp}>Hour:</Text>
          <View style={styles.rect_hour}>
            <Picker
              placeholder={{ label: 'Select hour', value: null }}
              onValueChange={(newHour) => setHour(newHour)}
            >
              <Picker.Item label="17:00" value="17:00" />
              <Picker.Item label="18:00" value="18:00" />
              <Picker.Item label="19:00" value="19:00" />
              <Picker.Item label="20:00" value="20:00" />
              <Picker.Item label="21:00" value="21:00" />
            </Picker>
          </View>
          <Text style={styles.discipline_title}>Discipline:</Text>
          <View style={styles.rect_discipline}>
            <Picker
              placeholder={{ label: 'Select the discipline', value: null }}
              selectedValue={discipline}
              onValueChange={(newDiscipline) => setDiscipline(newDiscipline)}
            >
              <Picker.Item label="Karate" value="Karate" />
              <Picker.Item label="Kata" value="Kata" />
              <Picker.Item label="Kumite" value="Kumite" />
              <Picker.Item label="Goshin" value="Goshin" />
            </Picker>
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
