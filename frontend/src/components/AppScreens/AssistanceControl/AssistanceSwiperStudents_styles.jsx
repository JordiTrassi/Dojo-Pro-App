import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    flex: 0.55,
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly',
  },
  bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardImage: {
    marginBottom: 40,
    marginTop: 20,
    height: 60,
    width: 180,
    flex: 1,
    borderRadius: 50,
    // resizeMode: 'contain',
  },
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  cardText: {
    fontFamily: 'arial',
  },
  heading: {
    fontSize: 40, marginBottom: -90, marginLeft: -30, color: 'gray',
  },

});
