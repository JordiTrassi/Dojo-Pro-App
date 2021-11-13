/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

let refreshTokens = [];

async function register({ user, body }, res) {
  const { name } = body;
  try {
    await User.create({ ...user, name });
    res.status(201);
    res.send(true);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function login({ user }, res) {
  const data = {
    _id: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    photo: user.photo,
  };
  const token = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRES_IN },
  );
  const refreshToken = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
  );

  refreshTokens.push(refreshToken);

  const returnUser = user;
  delete returnUser.password;

  res.json({
    token,
    refreshToken,
    user: returnUser,
  });
}

function tokenRefresh({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }

    const data = {
      _id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      photo: user.photo,
    };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '3000m' },
    );

    return res.json({
      token,
    });
  });
}

function logout({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  return res.send('Logout successful');
}

module.exports = {
  register,
  login,
  tokenRefresh,
  logout,
};
