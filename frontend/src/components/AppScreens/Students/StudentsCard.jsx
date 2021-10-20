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
import Svg, { Ellipse } from 'react-native-svg';
import { getCurrentUser } from '../../../redux/actions/actionUser';

import styles from './StudentsCard_Styles';

const pencilIcon = {
  uri: 'https://cdn.icon-icons.com/icons2/620/PNG/512/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.png',
};

export default function StudentCard() {
  const currentStudents = useSelector((store) => store.user.students);
  const userId = useSelector((store) => store.user._id);

  const dispatch = useDispatch();

  async function editStudent(studentId) {
    await dispatch(updateOneStudent(userId, studentId));
    dispatch(getCurrentUser(userId));
  }

  return (
    <View>
      <FlatList
        style={styles.flatlist_students}
        keyExtractor={(item) => item._id}
        key={`${currentStudents._id}`}
        data={currentStudents}
        renderItem={({ item }) => (
          <View styles={styles.student_card}>
            <View style={styles.student_rectangle}>
              <Text style={styles.student_rectangle_info}>{item.name}</Text>
              <Text style={styles.student_rectangle_info}>{item.surname}</Text>
              <Text style={styles.student_rectangle_info_discipline}>{item.discipline}</Text>

              <Svg viewBox="0 0 131.88 134.69" style={styles.avatar_circle}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  cx={57}
                  cy={57}
                  rx={57}
                  ry={57}
                  fill="rgba(65, 191, 63,0.40)"
                />
                <Image
                  source={{ uri: `${item.photo}` }}
                  name="student-avatar"
                  style={styles.icon_student_avatar}
                />
              </Svg>
            </View>
            <TouchableOpacity
              onPress={() => editStudent(item._id)}
              style={styles.btn_delete_class}
            >
              <Image
                source={pencilIcon}
                name="editEstudent"
                style={styles.icon_edit_student}
              />
            </TouchableOpacity>
            <View style={styles.flatList_separator} />
          </View>
        )}
      />
    </View>
  );
}
