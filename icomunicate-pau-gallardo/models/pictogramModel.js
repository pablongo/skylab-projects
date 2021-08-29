import mongoose from 'mongoose';

const { Schema } = mongoose;

const user = new Schema({
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
  metadata: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const User = mongoose.model('User', user);

export default User;
