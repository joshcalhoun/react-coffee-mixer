import {combineReducers} from 'redux';
import coffees from './coffeeTypesReducer';

const rootReducer = combineReducers({
  coffees
});

export default rootReducer;
