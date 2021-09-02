import connectDB from '../../middlewares/mongodb';
import { createNewUser } from '../../lib/controllers/userController';

const signupHandler = async (req, res) => {
  if (req.method === 'POST') {
    await createNewUser(req, res);
  } else {
    res.status(405).json({ message: 'This endpoint only support POST' });
  }
};

export default connectDB(signupHandler);
