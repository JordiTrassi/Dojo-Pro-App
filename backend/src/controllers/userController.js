/* eslint-disable no-underscore-dangle */
const asyncHandler = require('express-async-handler');
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

const createOneUser = asyncHandler(async (req, res) => {
  const {
    name, email, password, photo,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Alredy Exists');
  }
  const createdUser = await User.create({
    name,
    email,
    password,
    photo,
  });
  if (createdUser) {
    res.status(201).json({
      _id: createdUser._id,
      isAdmin: createdUser.isAdmin,
      name: createdUser.name,
      email: createdUser.email,
      photo: createdUser.photo,
    });
  } else {
    res.status(400);
    throw new Error('Error Occured! ');
  }
});

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
