import User from '../../models/userModel';

export async function createNewUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}

export function NewUser() {
  return '';
}
