import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  flatlist_students: {
    width: 340,
    height: 570,
    top: 740,
    left: 155,
  },
  flatList_separator: {
    height: 20,
    width: '100%',
  },
  student_card: {
    flexDirection: 'row',
  },
  student_rectangle: {
    width: 320,
    height: 170,
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
    flexDirection: 'column',
  },
  student_rectangle_info: {
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  avatar_circle: {
    top: -80,
    left: 190,
    width: 135,
    height: 135,
  },

  icon_student_avatar: {
    width: 105,
    height: 105,
    borderRadius: 50,
    top: 5,
    left: 5.5,
    zIndex: 99,
  },

});
