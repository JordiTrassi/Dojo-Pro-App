const { isValidPassword } = require('./userModel.isValidPassword');

describe('Given a isValidPassword function', () => {
  const password = '123';
  describe('When it is triggered', () => {
    test('Then should return password', () => {
      isValidPassword(password);

      expect(isValidPassword(password)).toBe(false);
    });
  });
});
