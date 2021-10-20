import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export function getCurrentUser(userId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${env.USER_URL}/${userId}`);
      dispatch({
        type: actionTypes.GET_CURRENT_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}

export function upNewInfo(userId, name, surname, discipline, degree) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${env.USER_URL}/${userId}`, {
        name, surname,
      });
      dispatch({
        type: actionTypes.UPDATE_CURRENT_USER,
        user: data,
      });
      if (discipline.length > 0) {
        const { data2 } = await axios.put(`${env.DISCIPLINE_URL}/${userId}`, {
          discipline, degree,
        });
        dispatch({
          type: actionTypes.CREATE_DISCIPLINE,
          user: data2,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}

export function upNewPhoto(userId, photo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${env.USER_URL}/${userId}`, {
        photo,
      });
      dispatch({
        type: actionTypes.UPDATE_CURRENT_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
