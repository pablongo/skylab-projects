import connectDB from '../../middlewares/mongodb';
import {
  createNewDictionary, getOneDictionary, deleteDictionary, updateDictionary,
} from '../../lib/controllers/dictionaryController';

const dictionaryHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewDictionary(req, res);
      break;

    case 'GET':
      await getOneDictionary(req, res);
      break;

    case 'DELETE':
      await deleteDictionary(req, res);
      break;

    case 'PUT':
      await updateDictionary(req, res);
      break;

    default:
      break;
  }
};

export default connectDB(dictionaryHandler);
