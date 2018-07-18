import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function roastTypesReducer(state = initialState.roasts, action) {
  switch(action.type) {
    case types.LOAD_ROAST_SUCCESS:
      return action.roasts;
    case types.CREATE_ROAST_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.roast)
      ];

    default:
      return state;
  }
}
