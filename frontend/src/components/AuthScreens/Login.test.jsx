/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';
import Login from './Login';

const navigation = {
  navigate: jest.fn(),
  push: jest.fn(),
};

const handleLogIn = jest.fn();
describe('Given a Character Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<Login navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('When email input text is changed', () => {
    test('Then the setEmail is invoked', () => {
      const emailInput = screen.getByTestId('userInputEmail');
      const setEmail = jest.fn();
      fireEvent(emailInput, 'onChangeText', setEmail);
      expect(setEmail).toHaveBeenCalled();
    });
  });
  describe('When password input text is changed', () => {
    test('Then the setPassword is invoked', () => {
      const passwordInput = screen.getByTestId('userInputPassword');
      const setPassword = jest.fn();
      fireEvent(passwordInput, 'onChangeText', setPassword);
      expect(setPassword).toHaveBeenCalled();
    });
  });
  describe('And the email and the password are valid', () => {
    beforeEach(() => {
      const logIn = jest.Mock;

      logIn.mockReturnValue({
        type: '',
      });

      const emailInput = screen.getByTestId('userInputEmail');
      const passwordInput = screen.getByTestId('userInputPassword');
      const loginButton = screen.getByTestId('loginBtn');
      fireEvent.changeText(emailInput, setEmail);
      fireEvent.changeText(passwordInput, setPassword);
      fireEvent.press(loginButton);
    });

    test('Then loginUser function should have been called', () => {
      expect(logIn).toHaveBeenCalled();
    });
  });

  describe('And you click on loginButton', () => {
    test('Then navigation.push should have been called', () => {
      const loginButton = screen.getByTestId('loginBtn');
      fireEvent.press(loginButton);
      expect(handleLogIn).toHaveBeenCalled();
    });
  });
  describe('And you click on mainScreenButton', () => {
    test('Then navigation.push should have been called', () => {
      const mainScreenButton = screen.getByTestId('mainScreenButton');
      fireEvent.press(mainScreenButton);
      expect(screen).toHaveBeenCalled();
    });
  });
});
