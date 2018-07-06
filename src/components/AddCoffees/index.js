import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as coffeeActions from '../../actions/coffeeActions';
import AddCoffees from './AddCoffees'
import {saveCoffee} from "../../actions/coffeeActions";


class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coffees: [],
    };
  }

  render() {
    return (
      <AddCoffees coffees={this.props.coffees} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees : state.coffees
  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveCoffee: saveCoffee
  }
  // return {
  //   actions: bindActionCreators({}, dispatch)
  // };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(coffeeActions, dispatch)
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps())(MainWrapper);
