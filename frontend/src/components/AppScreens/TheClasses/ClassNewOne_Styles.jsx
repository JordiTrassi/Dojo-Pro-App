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
    // flex: 2,
    width: 340,
    flexDirection: 'column',
    alignItems: 'center',
    top: 680,
    // left: 50,
    // paddingLeft: 20,
    // flex: 1,
    // maxHeight: 450,
  },

  form_title_camp: {
    paddingTop: 20,
    paddingBottom: 20,
    // top: 40,
    // left: 30,
    // position: 'absolute',
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 25,
  },
  rect_day: {
    // top: 80,
    // left: 25,
    width: 300,
    height: 45,
    // position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 7,
  },
  input_day: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    marginTop: 7,
    marginLeft: 19,
  },

  // hour_title: {
  //   top: 60,
  //   left: 5,
  //   position: 'absolute',
  //   fontFamily: 'arial',
  //   fontWeight: 'bold',
  //   color: '#121212',
  //   fontSize: 25,
  // },
  rect_hour: {
    // top: 100,
    // left: 50,
    width: 200,
    height: 45,
    // position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 7,
  },
  input_hour: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    marginTop: 7,
    marginLeft: 19,
  },

  discipline_title: {
    top: 245,
    left: 30,
    position: 'absolute',
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: '#121212',
    fontSize: 25,
  },
  rect_discipline: {
    top: 285,
    left: 25,
    width: 300,
    height: 45,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 7,
  },
  input_discipline: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 25,
    marginTop: 7,
    marginLeft: 19,
  },

  button_confirm: {
    top: 460,
    left: 45,
    width: 260,
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
    // marginLeft: -115,
  },

});
