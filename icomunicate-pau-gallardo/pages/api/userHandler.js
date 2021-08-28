import connectDB from '../../middlewares/mongodb';
import { createNewUser } from '../../lib/controllers/userController';

const userHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewUser(req, res);
      break;

    case 'GET':

      break;

    case 'DELETE':

      break;

    default:
      break;
  }
};

export default connectDB(userHandler);
