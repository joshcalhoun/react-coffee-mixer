import * as types from '../actions/actionTypes';
import initialState from "./initialState";


export default function coffeeTypesReducer(state = initialState.coffees, action) {
  switch(action.type) {
    case types.LOAD_COFFEES_SUCCESS:
      return action.coffees;
    case types.CREATE_COFFEE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.coffee)
      ];
    case types.UPDATE_COFFEE_SUCCESS:
      console.log(...state);
      return [
        ...state.filter(coffee => coffee.id !== action.coffee.id),
        Object.assign({}, action.coffee)
      ];

    default:
      return state;
  }
}
