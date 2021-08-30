import connectDB from '../../middlewares/mongodb';
import { createPictogram, deletePictogram, getPictogram } from '../../lib/controllers/pictogramController';

const pictogramHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createPictogram(req, res);
      break;

    case 'GET':
      await getPictogram(req, res);
      break;

    case 'DELETE':
      await deletePictogram(req, res);
      break;

    default:
      break;
  }
};

export default connectDB(pictogramHandler);
