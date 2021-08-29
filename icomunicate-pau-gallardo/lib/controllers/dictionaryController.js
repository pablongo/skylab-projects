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

export async function getOneDictionary(req, res) {
  const { dictionaryId } = req.query;
  try {
    const foundDictionary = await Dictionary.findById(dictionaryId);
    res.send(foundDictionary);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function deleteDictionary(req, res) {
  const { dictionaryId } = req.query;
  try {
    const deletedUser = await Dictionary.findByIdAndDelete(dictionaryId);
    res.send(deletedUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function updateUser(req, res) {
  const { dictionaryId } = req.query;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await Dictionary.findByIdAndUpdate(
      dictionaryId,
      dataToUpdate,
      { new: true },
    );
    res.send(updatedUser);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}
