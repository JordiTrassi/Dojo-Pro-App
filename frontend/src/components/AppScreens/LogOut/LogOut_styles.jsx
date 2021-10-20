import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
  },
  image: {
    top: 25,
    left: 0,
    width: 933,
    height: 819,
    position: 'absolute',
  },
  image_imageStyle: {
    opacity: 0.55,
  },

  image_logout_title: {
    width: 330,
    height: 80,
    top: 200,
    left: 230,
  },

  button_login: {
    top: 780,
    left: 323,
    width: 135,
    height: 65,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
  },
  btn_login_text: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 13,
  },

  imageStack: {
    marginTop: -125,
    marginLeft: -201,
  },
});
