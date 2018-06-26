import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import AddCoffees from './AddCoffees'

const Root = () =>
  <Switch>
    <Route path={ '/addcoffees'} component={AddCoffees} />
    <Route component={Main} />
  </Switch>




export default Root;
