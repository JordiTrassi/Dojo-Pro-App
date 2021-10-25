import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export default function logIn(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(env.LOG_IN_URL, { email, password });
      dispatch({
        type: actionTypes.LOG_IN,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
