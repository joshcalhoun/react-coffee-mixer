import {combineReducers} from 'redux';
import coffees from './coffeeTypesReducer';
import user from './userReducer';

import roasts from './roastTypesReducer';
import coffeeMix from './coffeeMixReducer';
import selectedCoffee from './selectedCoffeeReducer';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';

const rootReducer = combineReducers({
  coffees,
  user,
  roasts,
  coffeeMix,
  selectedCoffee,
  form,
  modal
});

export default rootReducer;
