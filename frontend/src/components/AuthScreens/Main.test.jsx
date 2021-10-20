/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';
import Main from './Main';

const navigation = {
  navigate: jest.fn(),
  push: jest.fn(),
};
describe('Given a Character Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<Main navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('And you click on loginButton', () => {
    test('Then navigation.push should have been called', () => {
      const loginButton = screen.getByTestId('loginBtn');
      fireEvent.press(loginButton);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
  describe('And you click on registerButton', () => {
    test('Then navigation.push should have been called', () => {
      const registerButton = screen.getByTestId('registerBtn');
      fireEvent.press(registerButton);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
