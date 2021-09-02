import { combineReducers } from 'redux';
import sentenceReducer from './sentenceReducer';

export default combineReducers({
  sentences: sentenceReducer,
});
