import connectDB from '../../middlewares/mongodb';

const userHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
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
