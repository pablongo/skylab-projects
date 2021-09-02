/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import Dictionary from '../../../models/dictionaryModel';
import Pictogram from '../../../models/pictogramModel';

export async function getAllDictionariesIds() {
  await mongoose.connect(
    process.env.mongodburl,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  );
  const foundDictionaries = await Dictionary.find({});
  return foundDictionaries.map((dictionary) => ({
    params: {
      id: `${dictionary._id}`,
    },
  }));
}

export async function getDictionaryData(dictionaryId) {
  await mongoose.connect(
    process.env.mongodburl,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  );

  const foundDictionary = await Dictionary.findById(dictionaryId).populate('pictogramList');
  return foundDictionary;
}

export async function getDictionaries() {
  const foundDictionaries = await Dictionary.find({});
  return foundDictionaries;
}
