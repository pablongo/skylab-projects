import connectDB from '../../middlewares/mongodb';
import { createNewDictionary } from '../../lib/controllers/dictionaryController';

const dictionaryHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewDictionary(req, res);
      break;

    case 'GET':
      break;

    case 'DELETE':
      break;

    case 'PUT':
      break;

    default:
      break;
  }
};

export default connectDB(dictionaryHandler);
