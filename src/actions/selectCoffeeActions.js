import * as types from './actionTypes';

export function setSelectCoffeeSuccess(selectedCoffee) {
  return {type: types.SET_SELECTEDCOFFEE_SUCCESS, selectedCoffee};
}




export function setSelectedCoffee(coffee) {
  return function(dispatch) {
    dispatch(setSelectCoffeeSuccess(coffee));
  };
}
