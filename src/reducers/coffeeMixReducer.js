import * as types from '../actions/actionTypes';
import initialState from "./initialState";


export default function coffeeMixReducer(state = initialState.coffees, action) {
  switch(action.type) {
    case types.SET_COFFEEMIX_SUCCESS:
      return action.coffees;

    default:
      return state;
  }
}
