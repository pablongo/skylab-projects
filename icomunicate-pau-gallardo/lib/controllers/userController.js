import User from '../../models/userModel';

function handleError(error, res) {
  res.send(error);
  res.status(500);
}

export async function createNewUser(req, res) {
  const { email } = req.body;
  let newUser;
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      newUser = {};
    } else {
      newUser = await User.create(req.body);
    }
    res.send(newUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export function NewUser() {
  return '';
}
