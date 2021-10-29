import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
  },

  background_img_dashboart: {
    width: 1028,
    height: 1864,
    position: 'absolute',
  },

  background_img_dashboart_imageStyle: {
    opacity: 0.5,
  },

  check_icon: {
    width: 39,
    height: 61,
  },

  title_rectangle: {
    top: 655,
    left: 119,
    width: 380,
    height: 130,
    position: 'absolute',
    backgroundColor: 'rgba(230,230, 230,0)',
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_assistance: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 30,
    fontWeight: 'bold',
  },
  assist_class_text: {
    top: 760,
    left: 195,
    position: 'absolute',
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 30,
  },
  rect_assist_class: {
    top: 800,
    left: 135,
    width: 350,
    height: 45,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },

  swipe_container: {
    top: 850,
    left: 115,
    width: 430,
    height: 450,
  },

  background_img_dashboartStack: {
    marginTop: -636,
    marginLeft: -115,
  },
});
