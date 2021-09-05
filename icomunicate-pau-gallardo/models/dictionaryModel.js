import mongoose from 'mongoose';

const { Schema } = mongoose;

const dictionary = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  pictogramList: [{ type: Schema.Types.ObjectId, ref: 'Pictogram' }],
});

mongoose.models = {};

const Dictionary = mongoose.model('Dictionary', dictionary);

export default Dictionary;
