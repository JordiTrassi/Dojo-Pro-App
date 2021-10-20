/* eslint-disable no-underscore-dangle */
const Student = require('../models/studentModel');
const User = require('../models/userModel');

async function getAllUserStudents({ params }, res) {
  const { userId } = params;
  try {
    const allUserStudents = await User.findById(userId)
      .populate('students');
    res.json(allUserStudents.students);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function createNewStudentToUser({ body, params: { userId } }, res) {
  try {
    const newStudent = await Student.create(body);
    const addedStudent = await User.findByIdAndUpdate(
      userId,
      { $push: { students: newStudent._id } },
      { new: true },
    );
    res.json(addedStudent);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function deleteOneStudentById({ params, body }, res) {
  try {
    const { userId } = params;
    const { studentId } = body;
    const findedUser = await User.findById(userId);
    const updatedStudent = findedUser.students.filter(
      (currentStudent) => currentStudent.toString() !== studentId,
    );
    findedUser.students = updatedStudent;
    await Student.findByIdAndDelete(studentId);

    findedUser.save();
    res.json('The student was deleted');
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function getOneStudentById({ params, body }, res) {
  const { userId } = params;
  const { studentId } = body;
  try {
    const findedUser = await User.findById(userId)
      .populate('students');
    const findedStudent = findedUser.students
      .filter((element) => studentId === element._id.toString());
    res.json(findedStudent);
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

async function updateStudentDisciplineById({ params, body }, res) {
  const { studentId } = params;
  const disciplineToAdd = body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $addToSet: { disciplines: disciplineToAdd._id } },
      { new: true },
    )
      .populate('disciplines');
    res.json(updatedStudent);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

module.exports = {
  getAllUserStudents,
  createNewStudentToUser,
  getOneStudentById,
  updateStudentDisciplineById,
  deleteOneStudentById,
};
