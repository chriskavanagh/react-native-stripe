import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  menuReducer,
  userReducer,
  cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
