import Dictionary from '../../models/dictionaryModel';
import handleError from '../../utils/handleError';

export async function createNewDictionary(req, res) {
  try {
    const newDictionary = await Dictionary.create(req.body);
    res.send(newDictionary);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function getOneUser(req, res) {
  const { userId } = req.query;
  try {
    const foundUser = await Dictionary.findById(userId);
    res.send(foundUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function deleteUser(req, res) {
  const { userId } = req.query;
  try {
    const deletedUser = await Dictionary.findByIdAndDelete(userId);
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
    const updatedUser = await Dictionary.findByIdAndUpdate(
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
