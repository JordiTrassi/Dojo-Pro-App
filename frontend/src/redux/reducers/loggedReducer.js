import actionTypes from '../actions/actionTypes';

function loggedReducer(loggedUser = {
  isAuthenticated: false,
}, action) {
  let newLoggedUser = loggedUser;
  switch (action.type) {
    case actionTypes.LOG_IN:
      newLoggedUser = {
        ...action.user,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }
  return newLoggedUser;
}

export default loggedReducer;
