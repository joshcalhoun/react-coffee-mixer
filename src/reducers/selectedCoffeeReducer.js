import * as types from '../actions/actionTypes';
import initialState from "./initialState";


export default function selectedCoffeeReducer(state = initialState.selectedCoffee, action) {
  switch(action.type) {
    case types.SET_SELECTEDCOFFEE_SUCCESS:
      return action.selectedCoffee;

    default:
      return state;
  }
}
