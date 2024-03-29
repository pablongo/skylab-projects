import connectDB from '../../../middlewares/mongodb';
import { createPictogram } from '../../../lib/controllers/pictogramController';

async function pictogramHandler(req, res) {
  switch (req.method) {
    case 'POST':
      await createPictogram(req, res);
      break;

    default:
      break;
  }
}

export default connectDB(pictogramHandler);
