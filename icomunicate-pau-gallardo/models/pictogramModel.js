import mongoose from 'mongoose';

const { Schema } = mongoose;

const pictogram = new Schema({
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  metadata: [String],
});

mongoose.models = {};

const Pictogram = mongoose.model('Pictogram', pictogram);

export default Pictogram;
