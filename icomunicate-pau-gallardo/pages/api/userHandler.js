import connectDB from '../../middlewares/mongodb';
import { createNewUser, deleteUser } from '../../lib/controllers/userController';

const userHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewUser(req, res);
      break;

    case 'GET':
      break;

    case 'DELETE':
      await deleteUser(req, res);
      break;

    default:
      break;
  }
};

export default connectDB(userHandler);
