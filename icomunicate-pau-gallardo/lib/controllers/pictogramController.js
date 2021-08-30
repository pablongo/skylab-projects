import Pictogram from '../../models/pictogramModel';
import handleError from '../../utils/handleError';

export async function createPictogram(req, res) {
  try {
    const newPictogram = await Pictogram.create(req.body);
    res.send(newPictogram);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function getPictogram(req, res) {
  const { pictogramId } = req.query;
  try {
    const foundPictogram = await Pictogram.findById(pictogramId);
    res.send(foundPictogram);
    res.status(200);
  } catch (error) {
    handleError(error, res);
  }
}

export async function deletePictogram(req, res) {
  const { pictogramId } = req.query;
  try {
    const deletedPictogram = await Pictogram.findByIdAndDelete(pictogramId);
    res.send(deletedPictogram);
  } catch (error) {
    handleError(error, res);
  }
}
