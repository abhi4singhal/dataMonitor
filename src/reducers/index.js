import {combineReducers} from 'redux';
import appBarReducer from './appBarReducer';

const rootReducer = combineReducers({
  appBar:appBarReducer
})

export default rootReducer;
