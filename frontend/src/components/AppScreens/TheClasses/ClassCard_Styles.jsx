import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  flatlist: {
    width: 380,
    height: 470,
    top: 750,
    left: 155,
  },
  flatList_separator: {
    height: 20,
    width: '100%',
  },
  class_card: {
    flexDirection: 'row',
  },
  class_rectangle: {
    width: 280,
    height: 44,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  class_rectangle_text: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 20,
  },
  btn_delete_class: {
    marginTop: -41,
    marginLeft: 285,
    width: 42,
    height: 42,
    backgroundColor: 'rgba(230, 230, 230, 0.84)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },
  icon_delete: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
