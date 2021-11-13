import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export default function newStudent(name, surname, discipline, photo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(env.CREATE_NEW_STUDENT, {
        name, surname, discipline, photo,
      });
      dispatch({
        type: actionTypes.CREATE_NEW_STUDENT,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
