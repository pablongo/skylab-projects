import Dictionary from '../../../models/dictionaryModel';

export async function getAllDictionariesIds(req, res) {
  const foundDictionaries = await Dictionary.find({});
  return foundDictionaries.map((dictionary) => ({
    params: {
      id: dictionary._id,
    },
  }));
}

export function getAllDictissonariesIds() {

}
