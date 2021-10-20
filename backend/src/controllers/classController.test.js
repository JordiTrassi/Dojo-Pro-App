const classController = require('./classController');
const Class = require('../models/classModel');
const User = require('../models/userModel');

jest.mock('../models/classModel');
jest.mock('../models/userModel');

describe('ClassController', () => {
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
  describe('Given getAllUserClasses and is invoked', () => {
    describe('And User.find resolves', () => {
      test('Then res.json is called', async () => {
        User.findById.mockResolvedValue({});
        await classController.getAllUserClasses(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.find rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue();
        await classController.getAllUserClasses(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given createNewClassToUser is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: '612a4bd1faa79d55f0a19980' },
      };
    });
    describe('And Class.create resolves', () => {
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Class.create.mockResolvedValue({ });
          User.findByIdAndUpdate.mockResolvedValue();
          await classController.createNewClassToUser(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();
          await classController.createNewClassToUser(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  describe('Given deleteOneClassById is invoked', () => {
    describe('And Class.findByIdAndDelete resolves', () => {
      beforeEach(() => {
        req = {
          params: { userId: '612a4bd1faa79d55f0a19980' },
          body: { classId: '1234' },
        };
        res = {
          send: jest.fn(),
          json: jest.fn(),
          status: jest.fn(),
        };
      });
      test('Then res.json is called', async () => {
        User.findById.mockResolvedValue({
          classes: ['1234'],
          userId: '612a4bd1faa79d55f0a19980',
          save: jest.fn(),
        });
        Class.findByIdAndDelete.mockResolvedValue();
        await classController.deleteOneClassById(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Class.findByIdAndDelete rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue({
          save: jest.fn(),
          userId: '612a4bd1faa79d55f0a19980',
          classes: ['1234'],
        });
        Class.findByIdAndDelete.mockRejectedValue();
        await classController.deleteOneClassById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
