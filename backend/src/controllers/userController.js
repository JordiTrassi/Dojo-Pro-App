const User = require('../models/userModel');

async function getAllUsers({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOneUser({ body }, res) {
  try {
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function getOneUserById({ params }, res) {
  const { userId } = params;
  try {
    const findUser = await User.findById(userId)
      .populate('disciplines')
      .populate('classes')
      .populate('students');
    res.json(findUser);
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function updateOneUserById({ body, params }, res) {
  const { userId } = params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      { new: true },
    );
    res.json(updatedUser);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function deleteOneUserById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.send('User was deleted.');
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

module.exports = {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById,
};
