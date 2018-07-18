import {combineReducers} from 'redux';
import coffees from './coffeeTypesReducer';
import user from './userReducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  coffees,
  user,
  form: formReducer
});

export default rootReducer;
