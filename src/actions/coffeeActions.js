import * as types from './actionTypes';
import coffeeApi from '../api/mockCoffeeApi';

export function loadCoffeesSuccess(coffees) {
  return {type: types.LOAD_COFFEES_SUCCESS, coffees};
}

export function updateCoffeeSuccess(coffee) {
  return {type: types.UPDATE_COFFEE_SUCCESS, coffee};
}

export function createCoffeeSuccess(coffee) {
  return {type: types.CREATE_COFFEE_SUCCESS, coffee};
}


export function loadCoffees() {
  return function(dispatch) {
    return coffeeApi.getAllCoffees().then(coffees => {
      dispatch(loadCoffeesSuccess(coffees));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCoffee(coffee) {
  return function(dispatch, getState) {
    return coffeeApi.saveCoffee(coffee).then(savedCoffee => {
      coffee.id ? dispatch(updateCoffeeSuccess(savedCoffee)):
        dispatch(createCoffeeSuccess(savedCoffee));
    }).catch(error => {
      throw(error);
    });
  };
}

