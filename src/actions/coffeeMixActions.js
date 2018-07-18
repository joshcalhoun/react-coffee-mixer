import * as types from './actionTypes';

export function setCoffeeMixSuccess(coffees) {
  return {type: types.SET_COFFEEMIX_SUCCESS, coffees};
}




export function setCoffeeMix(coffees) {
  return function(dispatch) {
      dispatch(setCoffeeMixSuccess(coffees));
  };
}
