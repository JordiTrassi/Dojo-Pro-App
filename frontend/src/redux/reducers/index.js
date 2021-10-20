import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loggedReducer';
import registerUser from './registerReducer';

export default combineReducers({
  user,
  login,
  registerUser,
});
