/* eslint-disable no-underscore-dangle */
const Discipline = require('../models/disciplineModel');
const User = require('../models/userModel');

async function getAllUserDisciplines({ params }, res) {
  const { userId } = params;
  try {
    const allUserDisciplines = await User.findById(userId);
    res.json(allUserDisciplines.disciplines);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function createNewDisciplineToUser({ body, params: { userId } }, res) {
  try {
    const newDiscipline = await Discipline.create(body);
    const addedDiscipline = await User.findByIdAndUpdate(
      userId,
      { $push: { disciplines: newDiscipline._id } },
      { new: true },
    );
    res.json(addedDiscipline);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function deleteOneDisciplineById({ params, body }, res) {
  try {
    const { userId } = params;
    const { disciplineId } = body;

    const findedUser = await User.findById(userId);
    const updatedDiscipline = findedUser.disciplines.filter(
      (currentDiscipline) => currentDiscipline.toString() !== disciplineId,
    );
    findedUser.disciplines = updatedDiscipline;
    await Discipline.findByIdAndDelete(disciplineId);

    findedUser.save();
    res.json('The discipline was deleted');
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

module.exports = {
  getAllUserDisciplines,
  createNewDisciplineToUser,
  deleteOneDisciplineById,
};
