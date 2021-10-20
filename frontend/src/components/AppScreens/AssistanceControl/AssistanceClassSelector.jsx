/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

export default function assistClassSelector() {
  const userClasses = useSelector((store) => store.user.classes);

  // const dispatch = useDispatch();
  const [theClass, setTheClass] = useState('');

  const pickerStyle = {
    inputIOS: {
      color: '#121212',
      paddingTop: 5,
      paddingHorizontal: 10,
      fontSize: 25,
      textAlign: 'center',
    },
    placeholderColor: '#121212',
    underline: { borderTopWidth: 0 },
  };

  // const validateData = () => {
  //   let isValid = true;
  //   if (discipline.length === 0 || hour.length === 0 || day.length === 0) {
  //     Toast.show('Complet all form fields');
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  // async function handleNewClass() {
  //   if (!validateData()) {
  //     return;
  //   }
  //   try {
  //     await dispatch(createNewClass(userId, day, hour, discipline));
  //     dispatch(getCurrentUser(userId));
  //   } catch {
  //     return;
  //   }

  // }

  return (
    <RNPickerSelect
      placeholder={{ label: 'Select the class', value: null }}
      onValueChange={(newClass) => setTheClass(newClass)}
      style={pickerStyle}
      items={userClasses.map((obj) => (
        {
          key: obj._id,
          label: `${obj.day} - ${obj.hour} - ${obj.discipline}`,
          value: obj.hour,
        }
      ))}
    />
  );
}
