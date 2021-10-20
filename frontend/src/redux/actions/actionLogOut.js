import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export default function logOutCurrentUser(userId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(env.LOG_OUT_USER_URL, { userId });
      dispatch({
        type: actionTypes.LOG_OUT_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
