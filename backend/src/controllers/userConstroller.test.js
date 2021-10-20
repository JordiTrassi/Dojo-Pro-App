const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('UserController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('Given createOneUser', () => {
    beforeEach(() => {
      req = {
        body: {},
      };
    });
    describe('When is invoked', () => {
      describe('And User.create resolves', () => {
        test('Then res.json is called', async () => {
          User.create.mockResolvedValue({ name: 'jordi' });

          await userController.createOneUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.create rejects', () => {
        test('Then res.status with 500', async () => {
          User.create.mockRejectedValue();

          await userController.createOneUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          User.create.mockRejectedValue(new Error('CREATE_ERROR'));

          await userController.createOneUser(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });
  describe('Given getAllUsers', () => {
    beforeEach(() => {
      req = {
        query: {},
      };
    });
    describe('When is invoked', () => {
      describe('And User.find resolves', () => {
        test('Then res.json is called', async () => {
          User.find.mockResolvedValue({ name: 'jordi' });

          await userController.getAllUsers(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.find rejects', () => {
        test('Then res.status with 500', async () => {
          User.find.mockRejectedValue();

          await userController.getAllUsers(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          User.find.mockRejectedValue(new Error('FIND_ERROR'));

          await userController.getAllUsers(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });
  describe('Given getOneUserById', () => {
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

    describe('When is invoked', () => {
      describe('And User.findById resolves', () => {
        test('Then res.json is called', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockReturnValue({
                  populate: jest.fn()
                    .mockResolvedValue({
                      name: 'jordi',
                      disciplines: [{ discipline: 'karate' }],
                      classes: [{ day: 'monday' }],
                      students: [{ name: 'Daniel' }],
                    }),
                }),
              }),
            });
          await userController.getOneUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.getOneUserById rejects', () => {
        test('Then res.status with 500', async () => {
          User.findById
            .mockRejectedValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockRejectedValue(),
              }),
            });

          await userController.getOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  describe('Given updateOneUserById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: '612a4bd1faa79d55f0a19980' },
      };
    });
    describe('When is invoked', () => {
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndUpdate.mockResolvedValue({ name: 'jordi' });

          await userController.updateOneUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await userController.updateOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          User.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await userController.updateOneUserById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });

  describe('Given deleteOneUserById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: '612a4bd1faa79d55f0a19980' },
      };
    });
    describe('When is invoked', () => {
      describe('And User.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await userController.deleteOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then res.send is called', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await userController.deleteOneUserById(req, res);

          expect(res.send).toHaveBeenCalled();
        });
      });

      describe('And User.findByIdAndDelete rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndDelete.mockRejectedValue();

          await userController.deleteOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          User.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

          await userController.deleteOneUserById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
