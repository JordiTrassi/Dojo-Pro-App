const disciplineController = require('./disciplineController');
const Discipline = require('../models/disciplineModel');
const User = require('../models/userModel');

jest.mock('../models/disciplineModel');
jest.mock('../models/userModel');

describe('DisciplineController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: { userId: '612a4bd1faa79d55f0a19980' },
    };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });
  describe('Given getAllUserDisciplines and is invoked', () => {
    describe('And User.find resolves', () => {
      test('Then res.json is called', async () => {
        User.findById.mockResolvedValue({});
        await disciplineController.getAllUserDisciplines(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.find rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue();
        await disciplineController.getAllUserDisciplines(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given createNewDisciplineToUser is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: '612a4bd1faa79d55f0a19980' },
      };
    });
    describe('And Discipline.create resolves', () => {
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Discipline.create.mockResolvedValue({ });
          User.findByIdAndUpdate.mockResolvedValue();
          await disciplineController.createNewDisciplineToUser(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();
          await disciplineController.createNewDisciplineToUser(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  describe('Given deleOneDisciplineById is invoked', () => {
    describe('And Discipline.findByIdAndDelete resolves', () => {
      beforeEach(() => {
        req = {
          params: { userId: '612a4bd1faa79d55f0a19980' },
          body: { disciplineId: 'disciplineId' },
        };
        res = {
          send: jest.fn(),
          json: jest.fn(),
          status: jest.fn(),
        };
      });
      test('Then res.json is called', async () => {
        User.findById.mockResolvedValue({
          userId: '612a4bd1faa79d55f0a19980',
          disciplines: ['disciplineId'],
          save: jest.fn(),
        });
        Discipline.findByIdAndDelete.mockResolvedValue();
        await disciplineController.deleteOneDisciplineById(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Discipline.findByIdAndDelete rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue({
          save: jest.fn(),
          userId: '612a4bd1faa79d55f0a19980',
          disciplines: ['disciplineId'],
        });
        Discipline.findByIdAndDelete.mockRejectedValue();
        await disciplineController.deleteOneDisciplineById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
