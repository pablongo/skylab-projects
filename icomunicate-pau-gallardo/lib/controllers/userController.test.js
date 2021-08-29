import User from '../../models/userModel';
import {
  createNewUser, getOneUser, deleteUser, updateUser,
} from './userController';

jest.mock('../../models/userModel');

describe('Given a createNewUser function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          body: { email: 'asda' },
        };

        User.findOne.mockResolvedValue({});
        User.create.mockResolvedValue({});

        await createNewUser(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getOneUser function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          query: { userId: '' },
        };

        User.findById.mockReturnValue({});

        await getOneUser(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteUser function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          query: { userId: '' },
        };

        User.findByIdAndDelete.mockReturnValue({});

        await deleteUser(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateUser function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          query: { userId: '' },
          body: {},
        };

        User.findByIdAndDelete.mockReturnValue({});

        await updateUser(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
