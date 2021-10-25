/* eslint-disable no-undef */
import axios from 'axios';
import actionTypes from './actionTypes';
import logIn from './actionLogIn';

jest.mock('axios');

describe('Given logIn function, ', () => {
  test('when resolved, then dispatch an object with type: LOG_IN and user: data', async () => {
    const user = { email: 'hola@hola.com', password: '123456' };
    const dispatch = jest.fn();
    axios.post.mockResolvedValue({ data });
    await logIn(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOG_IN,
      user: data,
    });
  });
});
