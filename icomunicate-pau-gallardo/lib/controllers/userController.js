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

export async function getOneUser(req, res) {
  const { userId } = req.query;
  try {
    const foundUser = await User.findById(userId);
    res.send(foundUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function deleteUser(req, res) {
  const { userId } = req.query;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send(deletedUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function updateUser(req, res) {
  const { userId } = req.query;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true },
    );
    res.send(updatedUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}
