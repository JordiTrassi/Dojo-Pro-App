import actionTypes from '../actions/actionTypes';

function registerReducer(registerUser = {
  isAuthenticated: false,
}, action) {
  let newRegisterUser = registerUser;
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      newRegisterUser = {
        ...action.user,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }
  return newRegisterUser;
}

export default registerReducer;
