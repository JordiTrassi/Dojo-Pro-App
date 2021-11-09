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

  title_rectangle: {
    top: 655,
    left: 219,
    width: 186,
    height: 62,
    position: 'absolute',
    backgroundColor: 'rgba(230,230, 230,0)',
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_classes: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btn_new_class: {
    top: 10,
    left: 210,
    width: 47,
    height: 47,
    position: 'absolute',
    backgroundColor: 'rgba(230,230, 230,0.84)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },
  icon_plus: {
    height: 40,
    width: 40,
  },

  background_img_dashboartStack: {
    flex: 7,
    marginTop: -636,
    marginLeft: -115,
  },
});
