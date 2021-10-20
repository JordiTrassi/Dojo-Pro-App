/* eslint-disable no-undef */
import userReducer from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('Given userReducer function ', () => {
  test('when action.type = LOG_IN, then should return user', () => {
    expect(
      userReducer(
        {},
        {
          type: actionTypes.LOG_IN,
          user: { name: 'Jordi' },
        },
      ),
    ).toEqual({ name: 'Jordi' });
  });
});
