import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import AddCoffees from './AddCoffees'
import RateMix from './RateMix'

const Root = () =>
  <Switch>
    <Route path={ '/addcoffees'} component={AddCoffees} />
    <Route path={ '/rate'} component={RateMix} />
    <Route component={Main} />
  </Switch>




export default Root;
