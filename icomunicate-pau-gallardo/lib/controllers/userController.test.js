import User from '../../models/userModel';
import { createNewUser } from './userController';

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

        User.create.mockResolvedValue({});

        await createNewUser(req, res);

        expect(res.send()).toHaveBeenCalled();
      });
    });
  });
});
