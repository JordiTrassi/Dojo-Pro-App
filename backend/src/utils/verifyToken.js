const jwt = require('jsonwebtoken');

function verifyToken(err, user, res) {
  if (err) {
    return res.sendStatus(403);
  }

  // eslint-disable-next-line no-underscore-dangle
  const data = { _id: user._id, email: user.email };

  const token = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRES_IN },
  );

  return res.json({
    token,
  });
}

module.exports = {
  verifyToken,
};
