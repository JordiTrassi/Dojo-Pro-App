const studentController = require('./studentController');
const Student = require('../models/studentModel');
const User = require('../models/userModel');

jest.mock('../models/studentModel');
jest.mock('../models/userModel');

describe('StudentController', () => {
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
  describe('Given getAllUserStudents and is invoked', () => {
    describe('And User.find resolves', () => {
      test('Then res.json is called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn()
            .mockResolvedValue({
              name: 'Jordi',
              students: [{ name: 'Chuck' }],
            }),
        });
        await studentController.getAllUserStudents(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.find rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue();
        await studentController.getAllUserStudents(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given createNewStudentToUser is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: '612a4bd1faa79d55f0a19980' },
      };
    });
    describe('And Student.create resolves', () => {
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Student.create.mockResolvedValue({ });
          User.findByIdAndUpdate.mockResolvedValue();
          await studentController.createNewStudentToUser(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();
          await studentController.createNewStudentToUser(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  describe('Given deleteOneStudentById is invoked', () => {
    describe('And Student.findByIdAndDelete resolves', () => {
      beforeEach(() => {
        req = {
          params: { userId: '612a4bd1faa79d55f0a19980' },
          body: { studentId: '1234' },
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
          students: ['1234'],
          save: jest.fn(),
        });
        Student.findByIdAndDelete.mockResolvedValue();
        await studentController.deleteOneStudentById(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Student.findByIdAndDelete rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue({
          userId: '612a4bd1faa79d55f0a19980',
          students: ['1234'],
          save: jest.fn(),
        });
        Student.findByIdAndDelete.mockRejectedValue();
        await studentController.deleteOneStudentById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given getOneStudentById is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: '612a4bd1faa79d55f0a19980' },
        body: { studentId: '1234' },
      };
      res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn(),
        students: {
          studentId: '1234',
          name: 'Chuck',
        },
      };
    });
    describe('And getOneStudentById resolves', () => {
      test('Then res.json is called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn()
            .mockResolvedValue({
              name: 'Jordi',
              students: [{ name: 'Chuck' }],
            }),
        });
        await studentController.getOneStudentById(req, res);
        expect(res.json).toHaveBeenCalledWith({
          name: 'Jordi',
          students: [{ name: 'Chuck' }],
        });
      });
    });
    describe('And User.findById rejects', () => {
      test('Then res.status with 500', async () => {
        User.findById.mockRejectedValue(
          Student.findById.mockRejectedValue(),
        );
        await studentController.getOneStudentById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });

  describe('Given updateStudentDisciplineById', () => {
    beforeEach(() => {
      req = {
        params: { studentId: '1234' },
        body: { discipline: 'karate' },
      };
    });
    describe('When is invoked', () => {
      describe('And updateStudentDisciplineById resolves', () => {
        test('Then res.json is called', async () => {
          Student.findByIdAndUpdate.mockReturnValue({
            populate: jest.fn()
              .mockResolvedValue({
                name: 'Chuck',
                discipline: [{ discipline: 'karate' }],
              }),
          });

          await studentController.updateStudentDisciplineById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And updateStudentDisciplineById rejects', () => {
        test('Then res.status with 500', async () => {
          Student.findByIdAndUpdate.mockRejectedValue();

          await studentController.updateStudentDisciplineById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
