/* eslint-disable no-underscore-dangle */
const Class = require('../models/classModel');
const User = require('../models/userModel');

async function getAllUserClasses({ params }, res) {
  const { userId } = params;
  try {
    const allUserClasses = await User.findById(userId);
    res.json(allUserClasses.classes);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function createNewClassToUser({ params: { userId }, body }, res) {
  try {
    const newClass = await Class.create(body);
    const addedClass = await User.findByIdAndUpdate(
      userId,
      { $push: { classes: newClass._id } },
      { new: true },
    );
    res.json(addedClass);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function deleteOneClassById({ params, body }, res) {
  try {
    const { userId } = params;
    const { classId } = body;
    const findedUser = await User.findById(userId);
    const updatedClass = findedUser.classes.filter(
      (currentClass) => currentClass.toString() !== classId,
    );
    findedUser.classes = updatedClass;
    await Class.findByIdAndDelete(classId);

    findedUser.save();
    res.json('The class was deleted');
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

module.exports = {
  getAllUserClasses,
  createNewClassToUser,
  deleteOneClassById,
};
