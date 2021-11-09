/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { getCurrentUser } from '../../../redux/actions/actionUser';
import { deleteOneClass } from '../../../redux/actions/actionClasses';

import styles from './ClassCard_Styles';
import { deleteIcon } from '../../../assets/ImagesAndIcons';

export default function ClassCard() {
  const currentClasses = useSelector((store) => store.user.classes);
  const userId = useSelector((store) => store.user._id);

  const dispatch = useDispatch();

  async function onPressDeleteClass(classId) {
    try {
      await dispatch(deleteOneClass(userId, classId));
      dispatch(getCurrentUser(userId));
      return classId;
    } catch (error) {
      return (error);
    }
  }

  return (
    <View>
      <FlatList
        style={styles.flatlist}
        keyExtractor={(item) => item._id}
        key={`${currentClasses._id}`}
        data={currentClasses}
        renderItem={({ item }) => (
          <View styles={styles.class_card}>
            <View style={styles.class_rectangle}>
              <Text style={styles.class_rectangle_text}>
                {item.day}
                {' '}
                -
                {' '}
                {item.hour}
                {' '}
                -
                {' '}
                {item.discipline}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onPressDeleteClass(item._id)}
              style={styles.btn_delete_class}
            >
              <Image
                source={deleteIcon}
                name="deleteClass"
                style={styles.icon_delete}
              />
            </TouchableOpacity>
            <View style={styles.flatList_separator} />
          </View>
        )}
      />
    </View>
  );
}
