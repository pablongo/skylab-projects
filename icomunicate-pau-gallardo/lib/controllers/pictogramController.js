import User from '../../models/userModel';
import Pictogram from '../../models/pictogramModel';
import handleError from '../../utils/handleError';

export async function createPictogramToUser(req, res) {
  const pictogramData = {
    title: req.body.title,
    image: req.body.image,
  };
  try {
    const newPictogram = await Pictogram.create(pictogramData);
    const newUserPictogram = await User.findOne({ email: req.body.email });

    console.log(newUserPictogram);
    await newUserPictogram.userPictogramList.push(newPictogram._id);
    await newUserPictogram.save();
    res.send(newUserPictogram);
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
