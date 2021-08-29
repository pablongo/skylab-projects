import Pictogram from '../../models/pictogramModel';
import handleError from '../../utils/handleError';
import { createPictogram } from './pictogramController';

jest.mock('../../models/pictogramModel');
jest.mock('../../utils/handleError');

describe('Given a createPictogram function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.create.mockResolvedValue({});
        await createPictogram(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then res.send should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.create.mockRejectedValue({});
        await createPictogram(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});
