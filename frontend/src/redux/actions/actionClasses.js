import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export function createNewClass(userId, day, hour, discipline) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${env.CLASSES_URL}/${userId}`, {
        day, hour, discipline,
      });
      dispatch({
        type: actionTypes.CREATE_NEW_CLASS,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}

export function deleteOneClass(userId, classId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${env.DELETE_CLASS_URL}/${userId}`, {
        classId,
      });
      dispatch({
        type: actionTypes.DELETE_ONE_CLASS,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
