import connectDB from '../../../middlewares/mongodb';
import { createNewUser } from '../../../lib/controllers/userController';

async function pictogramHandler(req, res) {
  switch (req.method) {
    case 'POST':
      await createNewUser(req, res);
      break;

    default:
      break;
  }
}

export default connectDB(pictogramHandler);
