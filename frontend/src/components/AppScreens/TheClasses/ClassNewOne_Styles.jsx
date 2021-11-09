import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flexDirection: 'column',
    alignItems: 'center',
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
    width: 350,
    height: 62,
    backgroundColor: 'rgba(230,230, 230,0)',
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_create_new_class: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 30,
    fontWeight: 'bold',
  },

  form_new_class: {
    width: 340,
    flexDirection: 'column',
    alignItems: 'center',
    top: 680,
  },

  form_title_camp: {
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 27,
  },
  picker_rectangle: {
    width: 200,
    height: 50,
  },

  button_confirm: {
    top: 90,
    width: 260,
    height: 65,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 0,
  },
  confirmBtn: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 13,
  },

  background_img_dashboartStack: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -636,
  },

});
