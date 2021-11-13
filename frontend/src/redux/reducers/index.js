import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loggedReducer';
import registerUser from './registerReducer';
import logout from './logOutReducer';

export default combineReducers({
  user,
  login,
  registerUser,
  logout,
});
