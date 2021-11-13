import actionTypes from '../actions/actionTypes';

function logOutReducer(logOutUser = {
  isAuthenticated: false,
}, action) {
  let newLogOutUser = logOutUser;
  switch (action.type) {
    case actionTypes.LOG_OUT_USER:
      newLogOutUser = {
        ...action.user,
        isAuthenticated: false,
      };
      break;
    default:
      break;
  }
  return newLogOutUser;
}

export default logOutReducer;
