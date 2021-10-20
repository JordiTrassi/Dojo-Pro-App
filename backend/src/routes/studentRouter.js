const { Router } = require('express');

const {
  getAllUserStudents,
  createNewStudentToUser,
  updateStudentDisciplineById,
  deleteOneStudentById,
  getOneStudentById,
} = require('../controllers/studentController');

const studentRouter = new Router();

studentRouter
  .route('/filter/:userId')
  .get(getOneStudentById);

studentRouter
  .route('/:userId')
  .get(getAllUserStudents)
  .put(createNewStudentToUser)
  .delete(deleteOneStudentById);

studentRouter
  .route('/disciplines/:studentId')
  .put(updateStudentDisciplineById);

module.exports = studentRouter;
