/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';
import Register from './Register';

jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
  push: jest.fn(),
};
jest.mock('react-native-simple-toast');
const handleLogIn = jest.fn();
describe('Given a Character Component', () => {
  let screen;
  beforeEach(() => {
    screen = render(<Register navigation={navigation} />);
  });
  describe('When it is rendered', () => {
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
  describe('And email input text is changed', () => {
    test('Then the text typed should be rendered', () => {
      const emailInput = screen.getByTestId('userInputEmail');
      fireEvent(emailInput, 'email');
      fireEvent.changeText(emailInput, 'email@email.com');
      expect(screen.queryByDisplayValue(/email@email.com/i)).not.toBe(null);
    });
  });
  describe('And you click on confirmButton', () => {
    test('Then navigation.push should have been called', () => {
      const confirmButton = screen.getByTestId('confirmBtn');
      fireEvent.press(confirmButton);
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
