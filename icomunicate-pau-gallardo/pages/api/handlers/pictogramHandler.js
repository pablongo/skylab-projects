import connectDB from '../../../middlewares/mongodb';
import { createPictogramToUser } from '../../../lib/controllers/pictogramController';

async function pictogramHandler(req, res) {
  switch (req.method) {
    case 'POST':
      await createPictogramToUser(req, res);
      break;

    default:
      break;
  }
}

export default connectDB(pictogramHandler);
