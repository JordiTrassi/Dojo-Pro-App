import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(15,15, 15,0)',
  },
  image: {
    top: -100,
    left: 0,
    width: 933,
    height: 819,
    position: 'absolute',
  },
  titleimage: {
    width: 350,
    height: 50,
    top: 240,
    left: 265,
  },

  button2: {
    top: 656,
    left: 280,
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
  logIn: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 13,
  },
  button: {
    top: 656,
    left: 461,
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
  register: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 13,
  },
  imageStack: {
    width: 953,
    height: 761,
    marginLeft: -242,
  },
});
