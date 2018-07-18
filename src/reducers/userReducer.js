import * as types from '../actions/actionTypes';
import initialState from "./initialState";


export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.UPDATE_USER_SUCCESS:
      console.log(state);
      console.log(action.user);
      return Object.assign({}, action.user, ...state);

    default:
      return state;
  }
}
