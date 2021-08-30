import Dictionary from '../../models/dictionaryModel';
import handleError from '../../utils/handleError';
import {
  createNewDictionary, getOneDictionary, deleteDictionary, updateDictionary,
} from './dictionaryController';

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

describe('Given a getOneDictionary function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then req.send should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findById.mockResolvedValue({});
        await getOneDictionary(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findById.mockRejectedValue({});
        await getOneDictionary(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteDictionary function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then req.send should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findByIdAndDelete.mockResolvedValue({});
        await deleteDictionary(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findByIdAndDelete.mockRejectedValue({});
        await deleteDictionary(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateDictionary function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then req.send should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findByIdAndUpdate.mockResolvedValue({});
        await updateDictionary(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
          query: { dictionaryId: '' },
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Dictionary.findByIdAndUpdate.mockRejectedValue({});
        await updateDictionary(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});
