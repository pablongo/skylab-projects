import connectDB from '../../middlewares/mongodb';
import { createNewDictionary, getOneDictionary } from '../../lib/controllers/dictionaryController';

const dictionaryHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewDictionary(req, res);
      break;

    case 'GET':
      await getOneDictionary(req, res);
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
