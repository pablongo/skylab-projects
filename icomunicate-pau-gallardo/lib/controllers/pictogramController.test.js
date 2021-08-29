import Pictogram from '../../models/pictogramModel';
import handleError from '../../utils/handleError';
import { createPictogram, getPictogram, deletePictogram } from './pictogramController';

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

describe('Given a getPictogram function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const req = {
          body: {},
          query: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.findById.mockResolvedValue({});
        await getPictogram(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
          query: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.findById.mockRejectedValue({});
        await getPictogram(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deletePictogram function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.send should have been called', async () => {
        const req = {
          body: {},
          query: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.findByIdAndDelete.mockResolvedValue({});
        await deletePictogram(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then handleError should have been called', async () => {
        const req = {
          body: {},
          query: {},
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
        };

        Pictogram.findByIdAndDelete.mockRejectedValue({});
        await deletePictogram(req, res);

        expect(handleError).toHaveBeenCalled();
      });
    });
  });
});
