import connectDB from '../../middlewares/mongodb';
import { createNewUser, deleteUser, getOneUser } from '../../lib/controllers/userController';

const userHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createNewUser(req, res);
      break;

    case 'GET':
      await getOneUser(req, res);
      break;

    case 'DELETE':
      await deleteUser(req, res);
      break;

    default:
      break;
  }
};

export default connectDB(userHandler);
