import Dictionary from '../../models/dictionaryModel';
import handleError from '../../utils/handleError';
import { createNewDictionary } from './dictionaryController';

jest.mock('../../models/dictionaryModel');
jest.mock('../../utils/handleError');

describe('Given a createNewDictionary function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then req.send should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.create.mockResolvedValue({});
        await createNewDictionary(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.create.mockRejectedValue({});
        await createNewDictionary(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});
