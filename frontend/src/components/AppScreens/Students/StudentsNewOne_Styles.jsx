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

  newStudentInfo: {
    top: 640,
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 22,
  },

  avatar_circle: {
    top: 670,
    width: 135,
    height: 135,
  },
  icon_avatar: {
    top: 5,
    left: 5.5,
    width: 125,
    height: 125,
    borderRadius: 50,
  },

  inputInfo: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
  },

  rect_name: {
    top: 700,
    width: 250,
    height: 35,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },

  rect_surname: {
    top: 720,
    width: 250,
    height: 35,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },

  rect_discipline: {
    top: 740,
    width: 250,
    height: 35,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },
  rect_degree: {
    top: 760,
    width: 250,
    height: 35,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },

  btn_upgrade: {
    top: 940,
    width: 298,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  upgrade: {
    fontFamily: 'arial',
    color: '#121212',
    fontSize: 28,
  },

  btn_camera: {
    top: 350,
    left: 110,
    width: 71,
    height: 47,
    backgroundColor: 'rgba(230,230, 230,0.84)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },
  icon_camera: {
    height: 37,
    width: 32,
  },

  background_img_dashboartStack: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -636,
  },
});
