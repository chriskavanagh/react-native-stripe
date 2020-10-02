import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  menuReducer,
  userReducer,
  cartReducer,
});

export default rootReducer;
