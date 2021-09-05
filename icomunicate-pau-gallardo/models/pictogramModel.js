import mongoose from 'mongoose';

const { Schema } = mongoose;

const pictogram = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Pictogram = mongoose.model('Pictogram', pictogram);

export default Pictogram;
