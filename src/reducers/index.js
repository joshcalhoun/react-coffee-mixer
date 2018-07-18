import {combineReducers} from 'redux';
import coffees from './coffeeTypesReducer';
import roasts from './roastTypesReducer';
import coffeeMix from './coffeeMixReducer';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';

const rootReducer = combineReducers({
  coffees,
  roasts,
  coffeeMix,
  form,
  modal
});

export default rootReducer;
