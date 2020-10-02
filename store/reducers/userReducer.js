import {SET_USER} from '../actions/types';

const initialState = {
  user: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
