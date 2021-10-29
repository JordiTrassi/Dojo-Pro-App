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

  titleimage: {
    width: 350,
    height: 50,
    top: 200,
    left: 225,
  },

  rect_password: {
    width: 300,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 7,
    marginTop: 414,
    marginLeft: 239,
  },
  input_password: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    marginTop: 7,
    marginLeft: 18,
  },
  button_signin: {
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
  rect_email: {
    top: 337,
    left: 242,
    width: 300,
    height: 45,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 7,
  },
  input_email: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    marginTop: 6,
    marginLeft: 18,
  },
  eMail: {
    top: 301,
    left: 257,
    position: 'absolute',
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 26,
  },
  password: {
    top: 421,
    left: 257,
    position: 'absolute',
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 26,
  },
  imageStack: {
    width: 953,
    height: 761,
    marginTop: -125,
    marginLeft: -201,
  },
});
