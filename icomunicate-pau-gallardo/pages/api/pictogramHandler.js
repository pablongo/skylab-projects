import connectDB from '../../middlewares/mongodb';
import { createPictogram } from '../../lib/controllers/pictogramController';

const userHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createPictogram(req, res);
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

export default connectDB(userHandler);
