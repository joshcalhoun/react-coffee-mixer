import * as types from './actionTypes';
import coffeeApi from '../api/mockCoffeeApi';
import fire from '../config/firebase'

const coffeesRef = fire.database().ref('coffees/');

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
    coffeesRef.once('value').then(snapshot => {
      let coffees = snapshot.val();
      let coffeeList = [];
      coffeeList = Object.values(coffees).sort();
      // Object.keys(coffees).sort().forEach(function(key,index) {
      //   coffeeList.push(coffees[key]);
      // });
      dispatch(loadCoffeesSuccess(coffeeList));
    }).catch(error => {
      throw(error);
    });
    // return coffeeApi.getAllCoffees().then(coffees => {
    //   dispatch(loadCoffeesSuccess(coffees));
    // }).catch(error => {
    //   throw(error);
    // });
  };
}

export function saveCoffee(coffee) {
  console.log(coffee);
  return function(dispatch) {
    let updates = {};
    updates[coffee.id] = coffee;
    coffeesRef.update(updates).then( () => {
      dispatch(updateCoffeeSuccess(coffee))
    });
    // return coffeeApi.saveCoffee(coffee).then(savedCoffee => {
    //   coffee.id ? dispatch(updateCoffeeSuccess(savedCoffee)):
    //     dispatch(createCoffeeSuccess(savedCoffee));
    // }).catch(error => {
    //   throw(error);
    // });

  };
}

// export function saveCoffees(coffees) {
//   return function(dispatch, getState) {
//     let updates = {};
//     updates[coffee]
//     coffeesRef.update(updates)
//     // return coffeeApi.saveCoffee(coffee).then(savedCoffee => {
//     //   coffee.id ? dispatch(updateCoffeeSuccess(savedCoffee)):
//     //     dispatch(createCoffeeSuccess(savedCoffee));
//     // }).catch(error => {
//     //   throw(error);
//     // });
//
//   };
// }
