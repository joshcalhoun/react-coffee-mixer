import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { saveCoffee } from '../../actions/coffeeActions';
import AddCoffees from './AddCoffees'
import Header from '../common/Header'
import styled from 'styled-components'
import form from './components/form'
class MainWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coffees: [],
    };
  }

  render() {
    return (

      <Wrapper>
        <Header />
        <AddCoffees formElements={form}/>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees : state.coffees
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveCoffee
  }, dispatch);
}



const Wrapper = styled.div`

  `

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
