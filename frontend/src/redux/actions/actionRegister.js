import axios from 'axios';
import actionTypes from './actionTypes';
import { env } from '../../../.env';

export default function confirm(name, email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(env.REGISTER_URL, { name, email, password });
      dispatch({
        type: actionTypes.REGISTER_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_ERROR,
      });
    }
  };
}
