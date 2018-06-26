import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as coffeeActions from '../../actions/coffeeActions';
import AddCoffees from './AddCoffees'


class MainWrapper extends Component {
  render() {
    return (
      <AddCoffees/>
    );
  }
}

const mapStateToProps = ({}) => ({

});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coffeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
