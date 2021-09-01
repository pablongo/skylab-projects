import mongoose from 'mongoose';
import Dictionary from '../../../models/dictionaryModel';

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
    params: { id: `${dictionary._id}` },
  }));
}

export async function getDictionaryData(dictionaryId) {
  const foundDictionary = await Dictionary.findById(dictionaryId);
  return foundDictionary;
}
