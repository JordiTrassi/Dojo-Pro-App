const { Router } = require('express');
const passport = require('passport');

const userRouter = new Router();

const {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById,
} = require('../controllers/userController');

const {
  getAllUserClasses,
  createNewClassToUser,
  deleteOneClassById,
} = require('../controllers/classController');

const {
  getAllUserDisciplines,
  createNewDisciplineToUser,
  deleteOneDisciplineById,
} = require('../controllers/disciplineController');

userRouter
  .route('/classes/delete/:userId')
  .put(deleteOneClassById);

userRouter
  .route('/classes/:userId')
  .get(getAllUserClasses)
  .put(createNewClassToUser);

userRouter
  .route('/disciplines/:userId')
  .get(getAllUserDisciplines)
  .put(createNewDisciplineToUser)
  .delete(deleteOneDisciplineById);

userRouter
  .route('/:userId')
  .get(getOneUserById)
  .put(updateOneUserById)
  .delete(deleteOneUserById);

userRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .get(getAllUsers)
  .post(createOneUser);

module.exports = userRouter;
