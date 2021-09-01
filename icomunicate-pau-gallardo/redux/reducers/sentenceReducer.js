import actionTypes from '../actions/actionTypes';

export default function sentenceReducer(pictoArray = [], action) {
  const newArray = pictoArray;
  switch (action.type) {
    case actionTypes.LOAD_SENTENCE:

      break;

    default:
      break;
  }
  return newArray;
}
