/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Overlay, Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { upNewPhoto, getCurrentUser } from '../../../redux/actions/actionUser';

const styles = StyleSheet.create({
  overlay: {
    width: 300,
    borderRadius: 20,
    fontSize: 25,
    fontFamily: 'arial',
  },
  photoUrl: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'arial',
    marginBottom: 20,
    marginTop: 10,
  },
  btn_add_photo_container: {
    borderRadius: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    width: 250,
    backgroundColor: 'green',
  },
  btn_add_photo_text: {
    fontWeight: 'bold',
    alignContent: 'center',
  },
});

export default function PhotoPopup({ setVisible, isVisible }) {
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user._id);

  const updatePhoto = async () => {
    if (photo.length === 0) {
      Toast.show('Introduce one Url, please');
      return;
    }
    await dispatch(
      upNewPhoto(userId, photo),
    );
    dispatch(getCurrentUser(userId));

    setVisible(false);
  };

  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={styles.overlay}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={styles.container}>

        <TextInput
          style={styles.photoUrl}
          onChangeText={(photoUrl) => setPhoto(photoUrl)}
          value={photo}
          placeholder="Photo's Url..."
          autoCapitalize="none"

        />
        <Button
          title="Add new photo"
          containerStyle={styles.btn_add_photo_container}
          buttonStyle={styles.btn_add_photo_text}
          onPress={updatePhoto}
        />
      </View>
    </Overlay>
  );
}
