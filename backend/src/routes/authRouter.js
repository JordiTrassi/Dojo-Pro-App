/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');

const authController = require('../controllers/authController');

const router = new Router();

router.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  authController.register,
);

router.post(
  '/login',
  passport.authenticate('login', { session: false }),
  authController.login,
);

router.post(
  '/refreshToken',
  authController.tokenRefresh,
);

router.post(
  '/logout',
  authController.logout,
);

module.exports = router;
