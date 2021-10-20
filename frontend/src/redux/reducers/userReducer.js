import actionTypes from '../actions/actionTypes';

const userReducers = (user = [], action) => {
  let loadedUser = user;

  switch (action.type) {
    case actionTypes.GET_CURRENT_USER:
      loadedUser = action.user;
      break;
    default:
      break;
  }
  return loadedUser;
};

export default userReducers;
