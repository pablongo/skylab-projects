import connectDB from '../../../middlewares/mongodb';
import createNewDictionary from '../../../lib/controllers/dictionaryController';

async function dictionaryHandler(req, res) {
  switch (req.method) {
    case 'POST':
      await createNewDictionary(req, res);
      break;

    default:
      break;
  }
}

export default connectDB(dictionaryHandler);
